const mongoose = require('mongoosee');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number,
    gender: {
        type: String,
        enum: ['male', 'female'],
    }
})