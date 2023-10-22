const express = require("express");
const fs = require('fs').promises;
const path = require('path')

const router = express.Router();

const ownerController = require('../controllers/ownerController');

router.post('/api/login', ownerController.login);

router.get('/api/:id', ownerController.getById);

router.put('/api/:id', ownerController.updateOwner);

router.use("/:id", async (req,res,next)=> {
    let frameSet = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "index.html"));
    let component = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "manage.html"));
    let script = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "manage.js"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    htmlContent = htmlContent.replace('<script id="additional-script">',`<script id="additional-script">${script.toString()}`);
    res.send(htmlContent);
});

router.use("/", async (req,res,next)=> {
    console.log(path.join(__dirname, "public", "view", "common", "index.html"));
    let frameSet = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "index.html"));
    let component = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "index.html"));
    let script = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "index.js"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    htmlContent = htmlContent.replace('<script id="additional-script">',`<script id="additional-script">${script.toString()}`);
    console.log(htmlContent);
    res.send(htmlContent);
});

module.exports = router;
