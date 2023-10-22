const express = require("express");
const fs = require('fs').promises;
const path = require('path')

const router = express.Router();

const ownerController = require('../controllers/ownerController');

router.post('/api/login', ownerController.login);

module.exports = router;
