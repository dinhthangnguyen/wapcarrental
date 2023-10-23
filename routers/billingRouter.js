const express = require("express");
const fs = require('fs').promises;
const path = require('path')

const router = express.Router();

const billingController = require('../controllers/billingController');

router.get('/api/:id', billingController.getById);

router.get('/api/track-order/:email/:order', billingController.getBillByOrderAndEmail);

router.get('/api/track-email/:email', billingController.getBillingsByEmail);

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


router.get("/track-email", async (req, res, next) => {
    let frameSet = await fs.readFile(path.join(__dirname, "../public/view/common/index.html"));
    let style = await fs.readFile(path.join(__dirname, "../public/view/common/style.css"));
    let component = await fs.readFile(path.join(__dirname, "../public/view/billing/track-email/track-email.html"));
    let script = await fs.readFile(path.join(__dirname, "../public/view/billing/track-email/track-email.js"));
    // let style2 = await fs.readFile(path.join(__dirname, "../public/view/billing/track-email/style.css"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">', `<div class="row main-content">${component.toString()}`);
    htmlContent = htmlContent.replace('<style id = "custom-inline">', `<style id = "custom-inline">${style.toString()}`);
    // htmlContent = htmlContent.replace('<style id = "custom-inline2">', `<style id = "custom-inline2">${style2.toString()}`);
    htmlContent = htmlContent.replace('<script id="additional-script">', `<script id="additional-script">${script.toString()}`);
    res.send(htmlContent);
});

module.exports = router;
