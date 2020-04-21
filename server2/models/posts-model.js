const mongoose = require('mongoose')
const Schema = mongoose.Schema

const post = new Schema(
    {
        title: { type: String },
        subtitle: { type: String},
        text: { type: String},
        picture: { type: String },
        

    },

    { timestamps: true },
)

module.exports = mongoose.model('post', post)