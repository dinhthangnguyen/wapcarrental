const Owner = require('../models/Owner')

let ownerController = {

    login: function(req, res, next){
        let email = req.body.email;
        if(email){
            let ownerId = Owner.getIdByEmail(email);
            if(!ownerId) {
                res.status(404).json({message: "Email not exists"});
            } else{
                res.redirect(`/owners/${ownerId}`)
            }
        } else {
            res.status(400).json({message: "Not blank email"});
        }
    },
    getById: function(req, res, next){
        let id = parseInt(req.params.id);
        let owner = Owner.getById(id);
        if(owner){
            res.status(200).json(owner);
        } else{
            res.status(404).json({ message: "owner not found."});
        }
    },
    getCarsById: function(req, res, next){
        let id = parseInt(req.params.id);
        let cars = Owner.getCarsById(id);
        if(cars){
            res.status(200).json(cars);
        } else{
            res.status(404).json({ message: "owner not found."});
        }
    },
    getBillingsById: function(req, res, next){
        let id = parseInt(req.params.id);
        let billings = Owner.getBilingsById(id);
        if(billings){
            res.status(200).json(billings);
        } else{
            res.status(404).json({ message: "owner not found."});
        }
    },
    updateOwner: function(req, res, next){
        let { name, phone, billingAddress , zip, email, creditCard} = req.body;
        id = parseInt(req.params.id);

        let updatedOwner = new Owner(id, name, phone, billingAddress , zip, email, creditCard).update();
        if(updatedOwner){
            res.status(200).json(updatedOwner);
        } else{
            res.status(404).json({ message: "student not found."});
        }
    },
    registerOwner: function(req, res, next){      
        let { id, name, phone, billingAddress , zip, email, creditCard} = req.body;
        id = Owner.getMaxId() + 1;
        
        if(id && name && phone && email){
            if(Owner.getIdByEmail(email)) {
                res.status(400).json({message: "Email existed."});
            } else{
                let newOwner = new Owner(id, name, phone, billingAddress , zip, email, creditCard).create();
                res.status(201).json(newOwner);
            }
        } else {
            res.status(400).json({message: "Provide all data."});
        }
    },
    deleteOwner: function(req, res, next){
        let id = parseInt(req.params.id);

        let deletedOwner = Owner.removeById(id);
        if(deletedOwner){
            res.status(200).json(deletedOwner);
        } else{
            res.status(404).json({ message: "Owner not found."});
        }
    },
}

module.exports = ownerController;