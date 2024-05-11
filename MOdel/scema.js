const mongoose = require('mongoose');

const scehma = mongoose.Schema({
    name: String,
    message: String,
    date: Date
    },
    {timestamps: true}
);

    mongoose.Schema(scehma);
    module.exports = mongoose.model('Message', scehma); 
    