require("dotenv").config()
const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },

    actor: {
        type: String,
        default: "N/A",

    },

    director: {
        type: String,
        default: "N/A"
    }

})

const Movie = mongoose.model("MovieList", movieSchema)

module.exports = Movie