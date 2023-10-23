const Renter = require('../models/Renter');
const Car = require('../models/Car');
const Billing = require('../models/Billing');

const idGenerator = require("../commons/idgenerator");

let renterController = {
    rent(req, res, next) {
        let { name, email, address, license, phone, card, carID } = req.body;
        if (!email || !name || !address || !license || !phone || !carID || !card) {
            res.status(400).json({ "message": "Bad request, please provide correct information" });
            return;
        }

        let car = Car.getById(parseInt(carID));
        if (!car) {
            res.status(404).json({ "message": "car not found" });
            return;
        }
        let renter = Renter.getRenterByEmailOrPhone(email);
        if (!renter) {
            renter = new Renter(
                Renter.generateId(),
                name,
                phone,
                address,
                email,
                card,
                license,
            );
            renter.create();
        }

        let billing = new Billing(
            Billing.generateId(),
            car.id,
            renter.id,
            idGenerator(10),
            car.price
        )
        billing.create();
        car.available = false;
        res.status(200).json(billing);
    },


}

module.exports = renterController;