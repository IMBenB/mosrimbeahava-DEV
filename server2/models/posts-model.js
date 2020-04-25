const mongoose = require('mongoose')
const Schema = mongoose.Schema

const post = new Schema(
    {
        headerPost: { type: String },
        subject_sub_header: { type: String},
        freeTextPost: { type: String},
        concept: { type: String},
        img2: { type: String },
        

    },

    { timestamps: true },
)

module.exports = mongoose.model('post', post)