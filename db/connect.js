const mongoose = require('mongoose')

const db = async() => {
    await mongoose.connect('mongodb://localhost:27017/BoaConta')
    console.log('Connect Mongoose!')
}

db().catch(err => console.log(err))

module.exports = mongoose