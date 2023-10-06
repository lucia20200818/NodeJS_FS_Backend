
const mongoose = require('mongoose');
const User = require('../models/userModel');
require('dotenv').config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.mongo);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

const disconnect = async() =>{

    await mongooose.connection.close();
};
//obj: {req.body.email().....}
const findUser = async(obj) =>{

    User.findOnde(obj);
};

const saveUser = async(newuser) =>{

    return await newuser.save();};



module.exports = {connect , disconnect , findUser , saveUser};