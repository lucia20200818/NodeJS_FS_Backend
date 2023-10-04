
const mongoose = require('mongoose');

require('dotenv').config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.mongo);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = {connect};