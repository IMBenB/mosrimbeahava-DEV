const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

var express = require('express')
app.post('/', function (req, res, next) {

    res.send('Uploaded: ' + req.files.image.name)
    return next()

});

app.listen(3000);
console.log('Express app started on port 3000');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.bodyParser({ keepExtensions: true, uploadDir: '../client/public/uploadedImages' }))


//ROUTERS/////////////////////////////////////////////////////////////////////////////

//branches route---------------
const branchesRouter = require('./routes/getProjects');
app.use("/getProjects", branchesRouter);


//END ROUTERS/////////////////////////////////////////////////////////////////////////////


//conections ////////////////////////////////////////////////////////////////////////////////////////////
//server conection------------------
let port = process.env.PORT || 4000;
app.listen(port, function () {
    console.log('-------------------------> server conected to port: ', port, '!<---------------------------------------------------------')
})

//connect mongoDB---------------------------------------------------------------
const mongoose = require('mongoose');//npm i mongoose
const url = "mongodb://chicco:qqwwee123@cluster0-shard-00-00-hn1ba.mongodb.net:27017,cluster0-shard-00-01-hn1ba.mongodb.net:27017,cluster0-shard-00-02-hn1ba.mongodb.net:27017/TST?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
var Item = new ItemSchema(
    {
        img:
            { data: Buffer, contentType: String }
    }
);
var Item = mongoose.model('Clothes', ItemSchema);
app.use(multer({
    dest: ` ./uploads/`,
    rename: function (fieldname, filename) {
        return filename;
    },
}));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('------------------------------> DB conected as well! <---------------------');
});
////////// END conections /////////////////////////////////////////////////////////////////////////////
