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

        if (!renter) {
            res.status(404).json({"message": "Not found"})
            return;
        }
        let billings = Billing.getBillingsByRenterId(renter.id);
        if(billings){
            res.status(200).json(billings);
        } else{
            res.status(404).json({ message: "Billing not found."});
        }
    },
    payBilling: function(req, res, next){
        let id = parseInt(req.params.id);
        if(id){
            let billing = Billing.getById(id);
            if(billing && billing.status != Billing.Status.Unpaid)
                res.status(500).json({ message: "Invalid Status"});
            else{
                billing = billing.pay();
                if(billing){
                    res.status(200).json(billing);
                } else{
                    res.status(404).json({ message: "Billing not found."});
                }
            }
        }   
    },
    confirmPayBilling: function(req, res, next){
        let id = parseInt(req.params.id);
        if(id){
            let billing = Billing.getById(id);
            if(billing && billing.status != Billing.Status.Paid)
                res.status(500).json({ message: "Invalid Status"});
            else{
                billing = billing.confirmPay();
                if(billing){
                    res.status(200).json(billing);
                } else{
                    res.status(404).json({ message: "Billing not found."});
                }
            }
        }   
    },
    cancelBilling: function(req, res, next){
        let id = parseInt(req.params.id);
        if(id){
            let billing = Billing.getById(id);
            if(billing && (billing.status === Billing.Status.Closed || billing.status === Billing.Status.Canceled))
                res.status(500).json({ message: "Invalid Status"});
            else{
                billing = billing.cancelPay();
                if(billing){
                    res.status(200).json(billing);
                } else{
                    res.status(404).json({ message: "Billing not found."});
                }
            }
        }   
    },
}


module.exports = billingController;