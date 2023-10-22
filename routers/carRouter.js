const express = require("express");

const carRouter = express.Router();
const carController = require('../controllers/carController');

carRouter.get('/',carController.getCars);
carRouter.get('/cities',carController.getCities);
carRouter.get('/makes',carController.getMakesByCity);
carRouter.get('/models',carController.getModels);
carRouter.get('/years',carController.getYears);


module.exports = carRouter;
