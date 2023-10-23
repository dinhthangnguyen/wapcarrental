const express = require("express");
const fsPromise = require('fs').promises;
const path = require('path');

const renterRouter = express.Router();
const renterController = require('../controllers/renterController');
const billingController = require('../controllers/billingController');

renterRouter.post("/api",renterController.rent);
// renterRouter.post('/api/pay', billingController.payBilling);
// renterRouter.post('/api/cancel', billingController.cancelBilling);


renterRouter.get("/", async (req, res, next) => {
    let frameSet = await fsPromise.readFile(path.join(__dirname, "../public/view/common/index.html"));
    let style = await fsPromise.readFile(path.join(__dirname, "../public/view/common/style.css"));
    let component = await fsPromise.readFile(path.join(__dirname, "../public/view/rent/rent.html"));
    let script = await fsPromise.readFile(path.join(__dirname, "../public/view/rent/rent.js"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">', `<div class="row main-content">${component.toString()}`);
    htmlContent = htmlContent.replace('<style id="custom-inline">', `<style id="custom-inline">${style.toString()}`);
    htmlContent = htmlContent.replace('<script id="additional-script">', `<script id="additional-script">${script.toString()}`);
    res.send(htmlContent);
});



renterRouter.get("/:renterId/billing/:billId", async (req,res,next)=> {
    let frameSet = await fsPromise.readFile(path.join(__dirname, ".." , "public", "view", "common", "index.html"));
    let style = await fsPromise.readFile(path.join(__dirname, ".." , "public", "view", "common", "style.css"));
    let component = await fsPromise.readFile(path.join(__dirname, ".." , "public", "view", "billing","rent-detail", "detail.html"));
    let script = await fsPromise.readFile(path.join(__dirname, ".." , "public", "view", "billing","rent-detail", "detail.js"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    htmlContent = htmlContent.replace('<style id="custom-inline">',`<style id="custom-inline">${style.toString()}`);
    htmlContent = htmlContent.replace('<script id="additional-script">',`<script id="additional-script">${script.toString()}`);
    res.send(htmlContent);
});

module.exports = renterRouter;
