const express = require("express");
const fs = require('fs').promises;
const path = require('path')

const router = express.Router();


router.get("/", async (req,res,next)=> {
    let frameSet = await fs.readFile(path.join(__dirname, ".." , "public", "view", "common", "index.html"));
    let component = await fs.readFile(path.join(__dirname, ".." , "public", "view", "about", "index.html"));
    let script = await fs.readFile(path.join(__dirname, ".." , "public", "view", "about", "index.js"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    htmlContent = htmlContent.replace('<script id="additional-script">',`<script id="additional-script">${script.toString()}`);
    res.send(htmlContent);
});

module.exports = router;
