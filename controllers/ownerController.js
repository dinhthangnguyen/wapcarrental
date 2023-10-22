const Owner = require('../models/Owner')

let ownerController = {

    login: function(req, res, next){
        let email = req.body.email;
        if(email){
            let ownerId = Owner.getIdByEmail(email);
            if(!ownerId) {
                res.status(404).json({message: "Email not exists"});
            } else{
                res.redirect(`/owners/view/detail/${ownerId}`)
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
    updateOwner: function(req, res, next){
        let id = parseInt(req.params.id);

        let updatedStudent = new Owner(id, req.body.name, req.body.phone, req.body.billingAddress, req.body.zip, req.body.email, req.body.creditCard).update();
        if(updatedStudent){
            res.status(200).json(updatedStudent);
        } else{
            res.status(404).json({ message: "student not found."});
        }
    },
}

module.exports = ownerController;