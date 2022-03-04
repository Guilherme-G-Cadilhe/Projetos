const usersDB = {
  users: require('../model/users.json'),
  setUsers: function (data) { this.users = data }
}
const fsPromises = require('fs').promises;
const path = require('path');
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) return res.status(400).json({ 'message': 'Username e Password são obrigatórios' })

  //Checar por usernames duplicados no db
  const duplicate = usersDB.users.find(person => person.username === user)
  //409 = conflict
  if (duplicate) return res.status(409).json({ 'message': 'Usuário já registrado com esse username' })

  try {
    // Encriptar a senha
    const hashedPassword = await bcrypt.hash(pwd, 10);
    // Guardar novo usuário
    const newUser = {
      "username": user,
      "roles": { "User": 2001 },
      "password": hashedPassword
    };
    usersDB.setUsers([...usersDB.users, newUser])

    await fsPromises.writeFile(
      path.join(__dirname, '../model/users.json'),
      JSON.stringify(usersDB.users)
    )
    console.log('usersDB >>', usersDB)
    res.status(201).json({ 'success': `Usuário: '${user}'. Criado com sucesso` })
  } catch (error) {
    res.status(500).json({ 'message': error.message })
  }
}

module.exports = { handleNewUser };

