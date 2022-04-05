const User = require('../model/User');

const getAllUsers = async (req, res) => {
  const users = await User.find();
  if (!users) return res.status(204).json({ 'message': 'Nenhum usuário encontrado' });
  res.json(users);
}

const deleteUser = async (req, res) => {
  if (!req?.body?.id) return res.status(400).json({ "message": 'User ID Obrigatório' });
  const user = await User.findOne({ _id: req.body.id }).exec();
  if (!user) {
    return res.status(204).json({ 'message': `User ID ${req.body.id} não encontrado` });
  }
  const result = await user.deleteOne({ _id: req.body.id });
  res.json({ 'message': `Usuário "${result.username}" deletado com sucesso!` });
}

const getUser = async (req, res) => {
  if (!req?.params?.id) return res.status(400).json({ "message": 'User ID Obrigatório' });
  const user = await User.findOne({ _id: req.params.id }).exec();
  if (!user) {
    return res.status(204).json({ 'message': `User ID ${req.params.id} não encontrado` });
  }
  res.json(user);
}

module.exports = {
  getAllUsers,
  deleteUser,
  getUser
}