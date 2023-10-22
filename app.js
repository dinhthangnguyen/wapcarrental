const express = require("express");
const path = require('path');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3000;
const carRouter = require("./routers/carRouter");
const ownerRouter = require("./routers/ownerRouter");
const renterRouter = require("./routers/renterRouter");
const aboutRouter = require("./routers/aboutRouter");

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.disable("case sensitive routing");
app.use(express.static("public"));
app.use("/cars",carRouter);
app.use("/owners",ownerRouter);
app.use("/rent",renterRouter);
app.use("/abouts",aboutRouter);


// app.use("/rent", (req,res,next)=> {
//     res.sendFile(path.join(__dirname,"/public/view/rent/rent.html"));
// })

app.use("/", (req,res,next)=> {
    res.sendFile(path.join(__dirname,"/public/view/home/index.html"));
})



app.use((err,req,res,next)=> {
    res.status(500).json({message: "Somewthing went wrong: " + err.message});
})
app.listen(PORT,()=> {
    console.log(`server is running on port ${PORT}`);
})
