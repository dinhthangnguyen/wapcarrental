const Car = require('../models/Car');


let carController = {
    getCities: function(req,res,next) {
        res.status(200).json(Car.getCities());
    },
    getMakesByCity: function(req,res,next) {
        let city = req.query.city;
        if (city) {
            res.status(200).json(Car.getMakesByCity(city));            
        } else {
            res.status(400).json({"message": "Bad request, please provide city"})
        }
    },
    getModels: function(req,res,next) {
        let {city, make} = req.query;
        if (city && make) {
            res.status(200).json(Car.getModels(city, make));            
        } else {
            res.status(400).json({"message": "Bad request, please provide city & make"})
        }
    },
    getYears: function(req,res,next) {
        let {city, make, model} = req.query;
        if (city && make && model) {
            res.status(200).json(Car.getYears(city, make, model));            
        } else {
            res.status(400).json({"message": "Bad request, please provide city & make & model"})
        }
    },
    getCars: function(req,res,next) {
        let {city, make, model, year} = req.query;
        if (city && make && model && year) {
            res.status(200).json(Car.getCars(city, make, model, year));            
        } else {
            res.status(400).json({"message": "Bad request, please provide city & make & model & year"})
        }
    },
    getCar: function(req,res,next) {
        let {id} = req.params;
        if (id) {
            res.status(200).json(Car.getCar(id));            
        } else {
            res.status(400).json({"message": "Bad request, please provide id"})
        }
    },
}

module.exports = carController;