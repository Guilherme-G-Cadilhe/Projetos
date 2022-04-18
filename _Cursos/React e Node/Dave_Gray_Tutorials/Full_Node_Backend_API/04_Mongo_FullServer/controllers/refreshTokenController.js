const User = require('../model/User');
const jwt = require('jsonwebtoken');


const handleRefreshToken = async function (req, res) {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;
  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });

  const foundUser = await User.findOne({ refreshToken }).exec();

  //Detecta reutilização do refresh token
  if (!foundUser) {
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      async (error, decoded) => {
        if (error) return res.sendStatus(403);
        // Tentativa de reutilização de Token
        const hackedUser = await User.findOne({ username: decoded.username }).exec();
        hackedUser.refreshToken = [];
        const result = await hackedUser.save()
      })
    return res.sendStatus(403); //Forbidden
  }

  const newRefreshTokenArray = foundUser.refreshToken.filter(refreshT => refreshT !== refreshToken);

  //avalia o jwt
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (error, decoded) => {
      if (error) {
        //Token expirado
        foundUser.refreshToken = [...newRefreshTokenArray];
        const result = await foundUser.save()
      }
      if (error || foundUser.username !== decoded.username) return res.sendStatus(403);

      //Refresh Token ainda válido
      const roles = Object.values(foundUser.roles)
      const accessToken = jwt.sign(
        {
          "UserInfo": {
            "username": decoded.username,
            "roles": roles
          }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '120s' }
      )

      const newRefreshToken = jwt.sign(
        {
          "username": foundUser.username
        },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1h' } // '1d' = 1 day, '1h' = 1 hour
      );

      // Salvar RefreshToken com o usuário atual
      foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken]
      const result = await foundUser.save()

      res.cookie('jwt', newRefreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 })

      res.json({ roles, accessToken })
    }
  );
}

module.exports = { handleRefreshToken }