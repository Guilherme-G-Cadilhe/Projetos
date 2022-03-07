const Employee = require('../model/Employee')

const getAllEmployees = async (req, res) => {
  const employees = await Employee.find();
  if (!employees) res.status(204).json({ message: `Nenhum Funcionario encontrado` });
  res.json(employees)
};


const createNewEmployee = async (req, res) => {
  if (!req?.body?.firstname || !req?.body?.lastname) res.status(500).json({ message: `Primeiro e últimos nomes são obrigatorios` });
  try {
    const result = await Employee.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname
    });

    res.status(201).json({ message: 'Criado com sucesso', result: result })
  } catch (error) {
    console.error(error);
    throw error
  }
};


const updateEmployee = async (req, res) => {
  if (!req?.body?.id) res.status(400).json({ message: `ID é obrigatório.` });

  const employee = await Employee.findOne({ _id: req.body.id }).exec()
  if (!employee) res.status(204).json({ message: `Nenhum Funcionario encontrado com esse ID: '${req.body.id}'` });

  if (req.body?.firstname) employee.firstname = req.body.firstname
  if (req.body?.lastname) employee.lastname = req.body.lastname

  const result = await employee.save();

  res.status(200).json({ message: 'Atualizado com sucesso', result: result })
};


const deleteEmployee = async (req, res) => {
  if (!req?.body?.id) res.status(400).json({ message: `ID é obrigatório.` });

  const employee = await Employee.findOne({ _id: req.body.id }).exec()
  if (!employee) res.status(204).json({ message: `Nenhum Funcionario encontrado com esse ID: '${req.body.id}'` });

  const result = await employee.deleteOne({ _id: req.body.id });

  res.status(200).json({ message: `Deletado com sucesso`, result: result })
};


const getEmployee = async (req, res) => {
  if (!req?.params?.id) res.status(400).json({ message: `ID é obrigatório.` });

  const employee = await Employee.findOne({ _id: req.params.id }).exec()
  if (!employee) res.status(204).json({ message: `Nenhum Funcionario encontrado com esse ID: '${req.params.id}'` });

  res.json(employee)
};

module.exports = {
  deleteEmployee,
  getEmployee,
  updateEmployee,
  createNewEmployee,
  getAllEmployees

}