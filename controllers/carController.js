const Car = require('../models/Car');
const Billing = require('../models/Billing');

function getHotPickDatas(limit) {
    let array = Car.getAvailable();

    for(let car of array){
        car.BillingCount = Billing.countByCarId(car.id);
    }

    array = array.sort((a1, a2) => {
        if (a1.BillingCount < a2.BillingCount) {
            return 1;
        }
        else if (a1.BillingCount > a2.BillingCount) {
            return -1;
        }
        return 0;
    }).slice(0, limit);
    return array;
}

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
    addCar: function(req, res, next){      
        let { make, model, year, price, ownerId, city, description} = req.body;
        id = Car.getMaxId() + 1;
        ownerId = parseInt(ownerId);
        if(id && make && model && year && price && ownerId && city && description){
            let car = new Car(id, make, model, year, price, ownerId, city, description).create();
            res.status(201).json(car);
        } else {
            res.status(400).json({message: "Provide all data."});
        }
    },
    updateCar: function(req, res, next){
        let {id, make, model, year, price, ownerId, city, description} = req.body;
        let updatedCar = Car.update(id, make, model, year, price, city, description);
        if(updatedCar){
            res.status(200).json(updatedCar);
        } else{
            res.status(404).json({ message: "Car not found."});
        }
    },
    deleteCar: function(req, res, next){
        let id = parseInt(req.params.id);

        let deletedCar = Car.removeById(id);
        if(deletedCar){
            res.status(200).json(deletedCar);
        } else{
            res.status(404).json({ message: "Car not found."});
        }
    },
    deleteImage: function(req, res, next){
        let id = parseInt(req.params.id);
        let img = req.body.img;
        let car = Car.removeImgById(id,img);
        if(car){
            res.status(200).json(car);
        } else{
            res.status(404).json({ message: "Car not found."});
        }
    },
    addImage: function(req, res, next){
        let id = parseInt(req.params.id);
        let img = req.body.img;
        let car = Car.addImgById(id,img);
        if(car){
            res.status(200).json(car);
        } else{
            res.status(404).json({ message: "Car not found."});
        }
    },
    getTodayPicks: function(req,res,next) {
        let limit = req.params.limit;
        if (limit) {
            res.status(200).json(Car.getTodayPicks(limit));            
        } else {
            res.status(400).json({"message": "Bad request"})
        }
    },
    getAffordables: function(req,res,next) {
        let limit = req.params.limit;
        if (limit) {
            res.status(200).json(Car.getAffordables(limit));            
        } else {
            res.status(400).json({"message": "Bad request"})
        }
    },
    getHotPicks: function(req,res,next) {
        let limit = req.params.limit;
        if (limit) {
            res.status(200).json(getHotPickDatas(limit));            
        } else {
            res.status(400).json({"message": "Bad request"})
        }
    },
}

module.exports = carController;