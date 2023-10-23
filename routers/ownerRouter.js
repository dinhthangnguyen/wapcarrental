const express = require("express");
const fs = require('fs').promises;
const path = require('path')

const router = express.Router();

const ownerController = require('../controllers/ownerController');

router.post('/api/login', ownerController.login);

router.get('/api/:id', ownerController.getById);

router.get('/api/:id/cars', ownerController.getCarsById);

router.get('/api/:id/billings', ownerController.getBillingsById);

router.put('/api/:id', ownerController.updateOwner);

router.post('/api', ownerController.registerOwner);

router.delete('/api/:id', ownerController.deleteOwner);

router.get("/register", async (req,res,next)=> {
    let frameSet = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "index.html"));
    let style = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "style.css"));
    let component = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "register.html"));
    let script = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "register.js"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    htmlContent = htmlContent.replace('<style id = "custom-inline">',`<style id = "custom-inline">${style.toString()}`);
    htmlContent = htmlContent.replace('<script id="additional-script">',`<script id="additional-script">${script.toString()}`);
    res.send(htmlContent);
});

router.get("/:id/cars/add", async (req,res,next)=> {
    let frameSet = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "index.html"));
    let style = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "style.css"));
    let component = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "addcar.html"));
    let script = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "addcar.js"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    htmlContent = htmlContent.replace('<style id = "custom-inline">',`<style id = "custom-inline">${style.toString()}`);
    htmlContent = htmlContent.replace('<script id="additional-script">',`<script id="additional-script">${script.toString()}`);
    res.send(htmlContent);
});

router.get("/:id/cars/:carId", async (req,res,next)=> {
    let frameSet = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "index.html"));
    let style = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "style.css"));
    let component = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "detailcar.html"));
    let script = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "detailcar.js"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    htmlContent = htmlContent.replace('<style id = "custom-inline">',`<style id = "custom-inline">${style.toString()}`);
    htmlContent = htmlContent.replace('<script id="additional-script">',`<script id="additional-script">${script.toString()}`);
    res.send(htmlContent);
});

router.get("/:id/cars", async (req,res,next)=> {
    let frameSet = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "index.html"));
    let style = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "style.css"));
    let component = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "managecar.html"));
    let script = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "managecar.js"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    htmlContent = htmlContent.replace('<style id = "custom-inline">',`<style id = "custom-inline">${style.toString()}`);
    htmlContent = htmlContent.replace('<script id="additional-script">',`<script id="additional-script">${script.toString()}`);
    res.send(htmlContent);
});

router.get("/:id/billings/:billingId", async (req,res,next)=> {
    let frameSet = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "index.html"));
    let style = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "style.css"));
    let component = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "detailbilling.html"));
    let script = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "detailbilling.js"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    htmlContent = htmlContent.replace('<style id = "custom-inline">',`<style id = "custom-inline">${style.toString()}`);
    htmlContent = htmlContent.replace('<script id="additional-script">',`<script id="additional-script">${script.toString()}`);
    res.send(htmlContent);
});

router.get("/:id/billings", async (req,res,next)=> {
    let frameSet = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "index.html"));
    let style = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "style.css"));
    let component = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "managebilling.html"));
    let script = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "managebilling.js"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    htmlContent = htmlContent.replace('<style id = "custom-inline">',`<style id = "custom-inline">${style.toString()}`);
    htmlContent = htmlContent.replace('<script id="additional-script">',`<script id="additional-script">${script.toString()}`);
    res.send(htmlContent);
});

router.get("/:id", async (req,res,next)=> {
    let frameSet = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "index.html"));
    let style = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "style.css"));
    let component = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "manage.html"));
    let script = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "manage.js"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    htmlContent = htmlContent.replace('<style id = "custom-inline">',`<style id = "custom-inline">${style.toString()}`);
    htmlContent = htmlContent.replace('<script id="additional-script">',`<script id="additional-script">${script.toString()}`);
    res.send(htmlContent);
});

router.get("/", async (req,res,next)=> {
    let frameSet = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "index.html"));
    let style = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "style.css"));
    let component = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "index.html"));
    let script = await fs.readFile(path.join(__dirname, ".." , "public", "view", "owner", "index.js"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    htmlContent = htmlContent.replace('<style id = "custom-inline">',`<style id = "custom-inline">${style.toString()}`);
    htmlContent = htmlContent.replace('<script id="additional-script">',`<script id="additional-script">${script.toString()}`);
    res.send(htmlContent);
});

module.exports = router;
