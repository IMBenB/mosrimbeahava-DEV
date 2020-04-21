const mongoose = require('mongoose')


mongoose
    .connect("mongodb+srv://IMBB:fdU3kNyjfqRYWXl6@cluster0-zxnkf.mongodb.net/mosrim", 
    { useNewUrlParser: true,
        useUnifiedTopology: true})

    .catch(e => {
        console.error('Connection error',
         e.message)
    })

const db = mongoose.connection 

module.exports = db