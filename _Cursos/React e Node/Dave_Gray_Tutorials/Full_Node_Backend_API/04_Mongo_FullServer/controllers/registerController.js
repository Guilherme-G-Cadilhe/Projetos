const User = require('../model/User');
const bcrypt = require("bcrypt");

const handleNewUser = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd) return res.status(400).json({ 'message': 'Username e Password são obrigatórios' })

  //Checar por usernames duplicados no db
  const duplicate = await User.findOne({ username: user }).exec();
  //409 = conflict
  if (duplicate) return res.status(409).json({ 'message': 'Usuário já registrado com esse username' })

  try {
    // Encriptar a senha
    const hashedPassword = await bcrypt.hash(pwd, 10);
    // Criar e Guardar novo usuário
    const result = await User.create({
      "username": user,
      "password": hashedPassword
    });

    console.log('result register controller create :>> ', result);

    res.status(201).json({ 'success': `Usuário: '${user}'. Criado com sucesso` })
  } catch (error) {
    res.status(500).json({ 'message': error.message })
  }
}

module.exports = { handleNewUser };

