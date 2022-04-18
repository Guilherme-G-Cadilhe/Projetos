const User = require('../model/User');

const handleLogout = async function (req, res) {
  // no client, tb deletar o accessToken

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // Sem conteúdo
  const refreshToken = cookies.jwt;

  // já existe RefreshToken no DB ?
  const foundUser = await User.findOne({ refreshToken }).exec();
  if (!foundUser) { //não
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    return res.sendStatus(204);
  }
  // Deletar RefreshToken no DB
  foundUser.refreshToken = foundUser.refreshToken.filter(refreshT => refreshT !== refreshToken);
  const result = await foundUser.save()

  //Deletar cookies tem q ser enviado as mesmas opções da criação com exceção de maxAge
  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
  return res.sendStatus(204);
}

module.exports = { handleLogout }