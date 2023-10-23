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
    },

    getBillByOrderAndEmail: function(req, res, next){
        let {order, email} = req.params;
        if(!email || !order){
            res.status(400).json({"message": "Bad request, please provide email & order"})
            return;
        }
        let renter = Renter.getRenterByEmailOrPhone(email);
        delete renter.creditCard;
        if (!renter) {
            res.status(404).json({"message": "Renter Not found"})
            return;
        }
        let bill = Billing.getBillingsByRenterIdAndOrderNumber(renter.id, order);
        if(bill){
            res.status(200).json({bill});
        } else{
            res.status(404).json({ message: "Bill not found."});
        }
    }
}


module.exports = billingController;