const Owner = require('../models/Owner')

let ownerController = {

    login: function(req, res, next){
        let email = req.body.email;

        if(email){
            let ownerId = Owner.getIdByEmail(newId);
            if(!ownerId) {
                res.status(404).json({message: "Email not exists"});
            } else{
                res.status(201).json({id: ownerId});
            }
        } else {
            res.status(400).json({message: "Not blank email"});
        }
    }

}

module.exports = ownerController;