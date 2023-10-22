const express = require("express");

const carRouter = express.Router();
const carController = require('../controllers/carController');

carRouter.get('/',carController.getAllCars);
carRouter.get('/cities',carController.getCities);
carRouter.get('/makes',carController.getMakesByCity);
carRouter.get('/models',carController.getModelsByMake);


module.exports = carRouter;
