'use strict';
const mongoose = require('mongoose');

module.exports = () => {
    mongoose.connect('mongodb+srv://test:fuck1234@cluster0.qycyo.mongodb.net/test', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    }).then(() => console.log('Connected to Mongodb......'));
}