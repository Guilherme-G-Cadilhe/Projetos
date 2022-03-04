const data = {
  employees: require('../model/employees.json'),
  setEmployees: function (data) { this.employees = data }
};

const getAllEmployees = (req, res) => {
  res.json(data.employees);
};

const createNewEmployee = (req, res) => {
  const newEmployee = {
    id: data.employees?.length ? data.employees[data.employees.length - 1].id + 1 : 1,
    firstname: req.body.firstname,
    lastname: req.body.lastname
  }

  if (!newEmployee.firstname || !newEmployee.lastname) {
    return res.status(400).json({ 'message': 'Primeiro e últimos nomes são obrigatorios' })
  }

  data.setEmployees([...data.employees, newEmployee])
  res.status(201).json({ message: 'Criado com sucesso', result: newEmployee })

};

const updateEmployee = (req, res) => {

  const employee = data.employees.find(employee => employee.id === parseInt(req.body.id));
  if (!employee) res.status(400).json({ message: `Funcionario de ID '${req.body.id}' não encontrado` });

  if (req.body.firstname) employee.firstname = req.body.firstname
  if (req.body.lastname) employee.lastname = req.body.lastname

  const filteredArray = data.employees.filter(employee => employee.id !== parseInt(req.body.id));
  const unsortedArray = [...filteredArray, employee]

  data.setEmployees(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

  res.status(200).json({ message: 'Atualizado com sucesso', result: employee })
};

const deleteEmployee = (req, res) => {
  const employee = data.employees.find(employee => employee.id === parseInt(req.body.id));
  if (!employee) res.status(400).json({ message: `Funcionario de ID '${req.body.id}' não encontrado` });

  const filteredArray = data.employees.filter(employee => employee.id !== parseInt(req.body.id));
  data.setEmployees([...filteredArray]);

  res.status(200).json({ message: 'Deletado com sucesso' })
};

const getEmployee = (req, res) => {
  const employee = data.employees.find(employee => employee.id === parseInt(req.params.id));
  if (!employee) {
    return res.status(400).json({ message: `Funcionario de ID '${req.params.id}' não encontrado` });
  }

  res.json(employee)
};

module.exports = {
  deleteEmployee,
  getEmployee,
  updateEmployee,
  createNewEmployee,
  getAllEmployees

}