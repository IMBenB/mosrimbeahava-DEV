const mongoose = require('mongoose');//npm i mongoose

const Schema = mongoose.Schema;
const projectsSchema = new Schema({
    gitHub: String,
    hiroku: String,
    title: String,
    category: String,
    description: Array,
    img: String
});


module.exports =
{
    projectsSchema: mongoose.model('myprojects', projectsSchema)   
}