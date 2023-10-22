const Billing = require('../models/Billing')

let billingController = { 
    getById: function(req, res, next){
        let id = parseInt(req.params.id);
        let billing = Billing.getById(id);
        if(billing){
            res.status(200).json(billing);
        } else{
            res.status(404).json({ message: "Billing not found."});
        }
    },
    getByOrderNumber: function(req, res, next){
        let numberOrder = req.params.numberOrder;
        let billing = Billing.getByOrderNumber(numberOrder);
        if(billing){
            res.status(200).json(billing);
        } else{
            res.status(404).json({ message: "Billing not found."});
        }
    },
}


module.exports = billingController;