const express = require("express");
const fs = require('fs').promises;
const path = require('path')

const router = express.Router();

const ownerController = require('../controllers/ownerController');

router.post('/login', ownerController.login);

router.get('/:id', ownerController.getById);

router.put('/:id', ownerController.updateOwner);

module.exports = router;
