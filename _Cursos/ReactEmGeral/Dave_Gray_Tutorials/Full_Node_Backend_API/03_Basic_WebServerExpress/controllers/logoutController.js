const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
}

const fsPromises = require('fs').promises;
const path = require('path');

const handleLogout = async function (req, res) {
  // no client, tb deletar o accessToken

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // Sem conteúdo
  const refreshToken = cookies.jwt;

  // já existe RefreshToken no DB ?
  const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
  if (!foundUser) { //não
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
    return res.sendStatus(204);
  }
  // Deletar RefreshToken no DB
  const otherUsers = usersDB.users.filter(person => person.refreshToken !== foundUser.refreshToken);
  const currentUser = { ...foundUser, refreshToken: '' };
  usersDB.setUsers([...otherUsers, currentUser]);

  await fsPromises.writeFile(
    path.join(__dirname, '..', 'model', 'users.json'),
    JSON.stringify(usersDB.users)
  );

  //Deletar cookies tem q ser enviado as mesmas opções da criação com exceção de maxAge
  res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true });
  return res.sendStatus(204);
}

module.exports = { handleLogout }