const Car = require('../models/Car');


let carController = {
    getAllCars: function(req,res,next) {
        res.status(200).json(Car.getAllCars());
    },
    getMakesByCity: function(req,res,next) {
        let city = req.query.city;
        if (city) {
            res.status(200).json(Car.getMakesByCity(city));            
        } else {
            res.status(400).json({"message": "Bad request, please provide city"})
        }
    },
    getCities: function(req,res,next) {
        res.status(200).json(Car.getCities());
    },
    getModelsByMake: function(req,res,next) {
        let make = req.query.make;
        if (make) {
            res.status(200).json(Car.getModelsByMake(make));            
        } else {
            res.status(400).json({"message": "Bad request, please provide make"})
        }
    },
}

module.exports = carController;