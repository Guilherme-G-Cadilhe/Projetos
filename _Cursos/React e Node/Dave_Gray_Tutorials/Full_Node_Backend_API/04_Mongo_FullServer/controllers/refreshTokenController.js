const User = require('../model/User');
const jwt = require('jsonwebtoken');


const handleRefreshToken = async function (req, res) {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;

  const foundUser = await User.findOne({ refreshToken }).exec();

  if (!foundUser) return res.sendStatus(403); //Forbidden
  //avalia o jwt
  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    (error, decoded) => {
      if (error || foundUser.username !== decoded.username) return res.sendStatus(403);
      const roles = Object.values(foundUser.roles)
      const acessToken = jwt.sign(
        {
          "UserInfo": {
            "username": decoded.username,
            "roles": roles
          }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '120s' }
      )
      res.json({ acessToken })
    }
  );
}

module.exports = { handleRefreshToken }