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
    getBillingsByEmailAndLicense: function(req, res, next){
        let {email, license} = req.params;
        if(!email || !license){
            res.status(400).json({"message": "Bad request, please provide email and license"})
            return;
        }
        let renter = Renter.getRenterByEmailOrPhone(email);        
        if (!renter) {
            res.status(404).json({"message": "Not found"})
            return;
        }
        
        if (renter.license.toLowerCase() !== license.toLowerCase()) {
            res.status(404).json({"message": "Not found"})
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
        if (!renter) {
            res.status(404).json({"message": "Renter Not found"})
            return;
        }
        let bill = Billing.getBillingsByRenterIdAndOrderNumber(renter.id, order);
        if(bill){
            res.status(200).json(bill);
        } else{
            res.status(404).json({ message: "Bill not found."});
        }
    },

    getBillByRenterIdAndOrder: function(req, res, next){
        let {id, orderId} = req.params;
        if(!id || !orderId){
            res.status(400).json({"message": "Bad request, please provide email & order"})
            return;
        }
        let renter = Renter.getById(parseInt(id));
        console.log(id,orderId);
        if (!renter) {
            res.status(404).json({"message": "Renter Not found"})
            return;
        }
        let bill = Billing.getBillingsByRenterIdAndOrderId(renter.id, orderId);
        console.log(bill);
        if(bill){
            res.status(200).json(bill);
        } else{
            res.status(404).json({ message: "Bill not found."});
        }
    }
}


module.exports = billingController;