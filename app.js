const express = require("express");
const path = require('path');
const multer = require('multer');
const fs = require('fs').promises;

const app = express();
const PORT = process.env.PORT || 3000;
const carRouter = require("./routers/carRouter");
const ownerRouter = require("./routers/ownerRouter");
const renterRouter = require("./routers/renterRouter");
const aboutRouter = require("./routers/aboutRouter");
const billingRouter = require("./routers/billingRouter");

// Set up storage for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/img/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});
const upload = multer({ storage: storage });

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.disable("case sensitive routing");
app.use(express.static("public"));
app.use("/cars",carRouter);
app.use("/owners",ownerRouter);
app.use("/rent",renterRouter);
app.use("/abouts",aboutRouter);
app.use("/billings",billingRouter);

// app.use("/rent", (req,res,next)=> {
//     res.sendFile(path.join(__dirname,"/public/view/rent/rent.html"));
// })

app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded.' });
    }

    const filePath = req.file.path;
    const fileName = req.file.filename;

    res.status(200).json({ success: true, message: 'File uploaded successfully!', filePath, fileName });
});

app.get("/", async (req,res,next)=> {
    let frameSet = await fs.readFile(path.join(__dirname , "public", "view", "common", "index.html"));
    let component = await fs.readFile(path.join(__dirname , "public", "view", "home", "index-ver2.html"));
    let script = await fs.readFile(path.join(__dirname , "public", "view", "home", "index-ver2.js"));
    let style = await fs.readFile(path.join(__dirname , "public", "view", "home", "style.css"));

    let htmlContent = frameSet.toString().replace('<div class="row main-content">',`<div class="row main-content">${component.toString()}`);
    htmlContent = htmlContent.replace('<style id="custom-inline">',`<style id="custom-inline">${style.toString()}`);
    htmlContent = htmlContent.replace('<script id="additional-script">',`<script id="additional-script">${script.toString()}`);
    res.send(htmlContent);
});

app.use((err,req,res,next)=> {
    res.status(500).json({message: "Somewthing went wrong: " + err.message});
})
app.listen(PORT,()=> {
    console.log(`server is running on port ${PORT}`);
})
