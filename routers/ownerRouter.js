const express = require("express");
const fs = require('fs').promises;
const path = require('path')

const router = express.Router();

const ownerController = require('../controllers/ownerController');

router.use("/", async (req,res,next)=> {
    let frameSet = await fs.readFile(path.join(__dirname, "..", "public", "view", "common", "index.html"));
    let component = await fs.readFile(path.join(__dirname, "..", "public", "view", "owner", "index.html"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    res.send(htmlContent);
})

router.post('/api/login', ownerController.login);

router.use("/", async (req,res,next)=> {
    let frameSet = await fs.readFile(path.join(__dirname, "..", "public", "view", "common", "index.html"));
    let component = await fs.readFile(path.join(__dirname, "..", "public", "view", "owner", "index.html"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    res.send(htmlContent);
})

module.exports = router;
