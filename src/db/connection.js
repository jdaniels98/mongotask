const dotenv = require('dotenv');
const mongoose = require('mongoose')

const connection = async () => {
    dotenv.config();
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Mongo!")
    } catch (error) {
        console.log(error)
    }
}

connection()