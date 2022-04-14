const User = require('../model/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const handleLogin = async function (req, res) {

  const { user, pwd } = req.body;
  if (!user || !pwd) return res.status(400).json({ 'message': 'Username e Password são obrigatórios' })

  const foundUser = await User.findOne({ username: user }).exec();
  if (!foundUser) return res.sendStatus(401);
  //avalia senha
  const match = await bcrypt.compare(pwd, foundUser.password)
  if (match) {
    const roles = Object.values(foundUser.roles).filter(Boolean);
    // criar JWT ( token )
    const acessToken = jwt.sign(
      {
        "UserInfo": {
          "username": foundUser.username,
          "roles": roles
        }
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '120s' }
    );
    const refreshToken = jwt.sign(
      {
        "username": foundUser.username
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: '1h' } // '1d' = 1 day, '1h' = 1 hour
    );

    // Salvar RefreshToken com o usuário atual
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save()

    // Seta cookies em HTTPOnly e não fica disponivel para q o JS o capture e roube
    // 24 * 60 * 60 * 1000 = 1 dia
    // Para permitir utilizar cookies entre dominio, colocar = sameSite: 'None'
    //Adicionar opção extra 'Secure: true' para dominios em produção e chrome, mas remover se for testar em aplicativos tipo Postman o refresh token cookie.
    //Caso queira usar o postman com secure true, tem q adicionar manualmente o "Cookie" no Header de envio pra função de refresh.
    res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 })
    res.json({ 'accessToken': `${acessToken}`, 'roles': `${roles}` })
  } else {
    res.sendStatus(401);
  }
}

module.exports = { handleLogin };