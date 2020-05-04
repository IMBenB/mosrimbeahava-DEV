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


 //---------------  email  ------------------//
        ////npm install nodemailer
        //'generate pass from here: https://myaccount.google.com/apppasswords'
        // const nodemailer = require('nodemailer');
        // var transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     type: "SMTP",
        //     host: "smtp.gmail.com",
        //     secure: true,
        //     auth: {
        //         user: 'chiccomosheserby@gmail.com',
        //         pass: 'chiccomosheserby123'
        //     }
        // });
        // let mailOptions = {
        //     from: 'chiccomosheserby@gmail.com',
        //     to: newOrder.clientEmail,
        //     subject: 'we recived your order from delivery app DEMO - ' + newOrder.selectedBranch,
        //     text: 'your order number for tracking: ' + newOrder.orderNum +
        //      '\n' +
        //      'name : ' + newOrder.clientName + '\n'
        //     + 'phone number: ' + newOrder.clientPhoneNumber
        // };
        // let mailOptions2 = {
        //     from: 'chiccomosheserby@gmail.com',
        //     to: 'chiccomoshe@gmail.com',
        //     subject: 'new order - ' + newOrder.selectedBranch,
        //     text: 'order number: ' + newOrder.orderNum + '\n'
        //         + 'name : ' + newOrder.clientName + '\n'
        //         + 'phone number: ' + newOrder.clientPhoneNumber
        // };

        // transporter.sendMail(mailOptions, function (error, info) {
        //     if (error) {
        //         console.log(error);

        //     } else {

        //         console.log('Email sent');
        //     }
        // });
        // transporter.sendMail(mailOptions2, function (error, info) {
        //     if (error) {
        //         console.log(error);

        //     } else {

        //         console.log('Email sent');
        //     }
        // });
        //--------------- END - email ------------------//


// server conection------------------
let port = process.env.PORT || 5000;

app.listen(port, function () {
    console.log('we on', port)
})