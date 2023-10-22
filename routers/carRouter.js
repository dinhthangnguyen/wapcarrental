const express = require("express");

const carRouter = express.Router();
const carController = require('../controllers/carController');

carRouter.get('/api',carController.getCars);
carRouter.get('/api/cities',carController.getCities);
carRouter.get('/api/makes',carController.getMakesByCity);
carRouter.get('/api/models',carController.getModels);
carRouter.get('/api/years',carController.getYears);


module.exports = carRouter;
