const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
}
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
require('dotenv').config();
const fsPromises = require('fs').promises;
const path = require('path');


const handleLogin = async function (req, res) {

  const { user, pwd } = req.body;
  if (!user || !pwd) return res.status(400).json({ 'message': 'Username e Password são obrigatórios' })

  const foundUser = usersDB.users.find(person => person.username === user);
  if (!foundUser) return res.sendStatus(401);
  //avalia senha
  const match = await bcrypt.compare(pwd, foundUser.password)
  if (match) {
    // criar JWT ( token )
    const acessToken = jwt.sign(
      { "username": foundUser.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '30s' }
    );
    const refreshToken = jwt.sign({ "username": foundUser.username }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' } // 1 day
    );

    // Salvar RefreshToken com o usuário atual
    const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username);
    const currentUser = { ...foundUser, refreshToken };
    usersDB.setUsers([...otherUsers, currentUser]);

    await fsPromises.writeFile(
      path.join(__dirname, '..', 'model', 'users.json'),
      JSON.stringify(usersDB.users)
    );

    // Seta cookies em HTTPOnly e não fica disponivel para q o JS o capture e roube
    // 24 * 60 * 60 * 1000 = 1 dia
    // Para permitir utilizar cookies entre dominio,s colocar = sameSite: 'None'
    //Adicionar opção extra 'Secure: true'
    res.cookie('jwt', refreshToken, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 })
    res.json({ 'acessToken': `${acessToken}` })
  } else {
    res.sendStatus(401);
  }
}

module.exports = { handleLogin };