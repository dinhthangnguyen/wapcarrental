const express = require("express");
const fsPromise = require('fs').promises;
const path = require('path');

const carRouter = express.Router();
const carController = require('../controllers/carController');

carRouter.get('/api',carController.getCars);
carRouter.get('/api/cities',carController.getCities);
carRouter.get('/api/makes',carController.getMakesByCity);
carRouter.get('/api/models',carController.getModels);
carRouter.get('/api/years',carController.getYears);
carRouter.get('/api/:id',carController.getCar);
carRouter.put('/api/:id', carController.updateCar);
carRouter.delete('/api/:id/images', carController.deleteImage);
carRouter.post('/api/:id/images', carController.addImage);
carRouter.delete('/api/:id', carController.deleteCar);

carRouter.get("/:id", async (req, res, next) => {
    let frameSet = await fsPromise.readFile(path.join(__dirname, "../public/view/common/index.html"));
    let style = await fsPromise.readFile(path.join(__dirname, "../public/view/common/style.css"));
    let component = await fsPromise.readFile(path.join(__dirname, "../public/view/car/car.html"));
    let script = await fsPromise.readFile(path.join(__dirname, "../public/view/car/car.js"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">', `<div class="row main-content">${component.toString()}`);
    htmlContent = htmlContent.replace('<style id = "custom-inline">', `<style id = "custom-inline">${style.toString()}`);
    htmlContent = htmlContent.replace('<script id="additional-script">', `<script id="additional-script">${script.toString()}`);
    res.send(htmlContent);
});


module.exports = carRouter;
