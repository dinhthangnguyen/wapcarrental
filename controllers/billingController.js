const Billing = require('../models/Billing');
const Renter = require('../models/Renter');

let billingController = { 
    getById: function(req, res, next){
        let id = parseInt(req.params.id);
        if(id){
            let billing = Billing.getById(id);
            if(billing){
                res.status(200).json(billing);
            } else{
                res.status(404).json({ message: "Billing not found."});
            }
        }    
    },
    getByOrderNumber: function(req, res, next){
        let numberOrder = req.params.numberOrder;
        if(numberOrder){
            let billing = Billing.getByOrderNumber(numberOrder);
            if(billing){
                res.status(200).json(billing);
            } else{
                res.status(404).json({ message: "Billing not found."});
            }
        } 
    },

    getBillingsByEmail: function(req, res, next){
        let email = req.params.email;
        if(!email){
            res.status(400).json({"message": "Bad request, please provide email"})
            return;
        }
        let renter = Renter.getRenterByEmailOrPhone(email);
        delete renter.creditCard;
        
        if (!renter) {
            res.status(404).json({"message": "Not found"})
            return;
        }
        let billings = Billing.getBillingsByRenterId(renter.id);
        if(billings){
            res.status(200).json({renter, billings});
        } else{
            res.status(404).json({ message: "Billing not found."});
        }
    }
}


module.exports = billingController;