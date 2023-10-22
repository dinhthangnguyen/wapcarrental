const express = require("express");
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3000;
const carRouter = require("./routers/carRouter");
const ownerRouter = require("./routers/ownerRouter");
const renterRouter = require("./routers/renterRouter");


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.disable("case sensitive routing");
app.use(express.static("public"));
app.use("/cars",carRouter);
app.use("/owners",ownerRouter);
app.use("/renters",renterRouter);



app.use("/rent", (req,res,next)=> {
    res.sendFile(path.join(__dirname,"/public/view/rent/rent.html"));
})

app.all("/owners/view/detail/:id", async (req,res,next)=> {
    let frameSet = await fs.readFile(path.join(__dirname, "public", "view", "common", "index.html"));
    let component = await fs.readFile(path.join(__dirname, "public", "view", "owner", "manage.html"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    res.send(htmlContent);
});

app.all("/owners/view/login", async (req,res,next)=> {
    console.log(path.join(__dirname, "public", "view", "common", "index.html"));
    let frameSet = await fs.readFile(path.join(__dirname, "public", "view", "common", "index.html"));
    let component = await fs.readFile(path.join(__dirname, "public", "view", "owner", "index.html"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    res.send(htmlContent);
});

app.all("/", (req,res,next)=> {
    res.sendFile(path.join(__dirname,"/public/view/home/index.html"));
})



app.use((err,req,res,next)=> {
    res.status(500).json({message: "Somewthing went wrong: " + err.message});
})
app.listen(PORT,()=> {
    console.log(`server is running on port ${PORT}`);
})
