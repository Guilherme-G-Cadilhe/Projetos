const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController')


// '.route' permite fazer todos os métodos de requisições em uma função só
router.route('/')
  .get(employeesController.getAllEmployees)
  .post(employeesController.createNewEmployee)
  .put(employeesController.updateEmployee)
  .delete(employeesController.deleteEmployee);


router.route('/:id')
  .get(employeesController.getEmployee)

module.exports = router