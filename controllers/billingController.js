const Billing = require('../models/Billing')

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
    payBilling: function(req, res, next){
        let id = parseInt(req.params.id);
        if(id){
            let billing = Billing.getById(id);
            if(billing){
                if(billing.status != Billing.Status.Unpaid)
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
        }   
    },
    cancelBilling: function(req, res, next){
        let id = parseInt(req.params.id);
        if(id){
            let billing = Billing.getById(id);
            if(billing){
                if(billing.status === Billing.Status.Canceled)
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
        }   
    },
}


module.exports = billingController;