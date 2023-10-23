const express = require("express");
const fs = require('fs').promises;
const path = require('path')

const router = express.Router();

const billingController = require('../controllers/billingController');

router.get('/api/:id', billingController.getById);

router.get('/api/track-order/:numberOrder', billingController.getByOrderNumber);

router.post('/api/pay/:id', billingController.payBilling);

router.post('/api/confirm-pay/:id', billingController.confirmPayBilling);

router.post('/api/cancel/:id', billingController.cancelBilling);

router.get("/track-order", async (req,res,next)=> {
    let frameSet = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "index.html"));
    let style = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "style.css"));
    let component = await fs.readFile(path.join(__dirname, ".." , "public", "view", "billing", "track-order.html"));
    let script = await fs.readFile(path.join(__dirname, ".." , "public", "view", "billing", "track-order.js"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    htmlContent = htmlContent.replace('<style id = "custom-inline">',`<style id = "custom-inline">${style.toString()}`);
    htmlContent = htmlContent.replace('<script id="additional-script">',`<script id="additional-script">${script.toString()}`);
    res.send(htmlContent);
});

router.get("/:id", async (req,res,next)=> {
    let frameSet = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "index.html"));
    let style = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "style.css"));
    let component = await fs.readFile(path.join(__dirname, ".." , "public", "view", "billing", "detail.html"));
    let script = await fs.readFile(path.join(__dirname, ".." , "public", "view", "billing", "detail.js"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    htmlContent = htmlContent.replace('<style id = "custom-inline">',`<style id = "custom-inline">${style.toString()}`);
    htmlContent = htmlContent.replace('<script id="additional-script">',`<script id="additional-script">${script.toString()}`);
    res.send(htmlContent);
});

module.exports = router;
