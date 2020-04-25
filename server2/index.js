const express = require('express');
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./db')

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());


const postRouter = require('./routes/post-router')
app.use("/post", postRouter)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// server conection------------------
let port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log('we on', port)
})