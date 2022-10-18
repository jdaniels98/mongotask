require ("./db/connection")
const mongoose = require('mongoose')
const yargs = require("yargs")
const {createMovie, readMovie, updateMovie, deleteMovie} = require("./movie/movieFunction")
const Movie = require("./movie/movieModel")


const app = async (yargsObject) => {
    try {
        // create MOVIE
        if (yargsObject.create) {
            await createMovie({title: yargsObject.title, actor: yargsObject.actor, director: yargsObject.director})
            console.log(await readMovie())
        }
        // read MOVIE
        else if (yargsObject.read){
            console.log(await readMovie(yargsObject.key, yargsObject.filter))    
        }
        // updateOne MOVIE
        else if (yargsObject.update){
            await updateMovie({title: yargsObject.title, actor: yargsObject.actor, director: yargsObject.director})
            console.log(await readMovie())
        }
        // deleteOne MOVIE
        else if (yargsObject.delete){
            await deleteMovie({title: yargsObject.title, actor: yargsObject.actor, director: yargsObject.director})
            console.log(await readMovie())
        }
        // Incorrect Input
        else {
        console.log("Unrecognised Input")
        }
        await mongoose.disconnect()
    } catch (error) {
        await mongoose.disconnect()
        console.log(error)
    }
}

app(yargs.argv)