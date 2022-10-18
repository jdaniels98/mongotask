require ("./db/connection")
const mongoose = require('mongoose')
const yargs = require("yargs")
const {createMovie, readMovie, updateMovie, deleteMovie} = require("./movie/movieFunction")
const {createTV, readTV, updateTV, deleteTV} = require("./tvshows/tvFunction")
const Movie = require("./movie/movieModel")
const TV = require("./tvshows/tvModel")


const app = async (yargsObject) => {
    try {
        // create MOVIE
        if (yargsObject.create) {
            await createMovie({title: yargsObject.title, actor: yargsObject.actor})
            console.log(await readMovie())
        }
        // read MOVIE
        else if (yargsObject.read){
            console.log(await readMovie(yargsObject.key, yargsObject.filter))    
        }
        // updateOne MOVIE
        else if (yargsObject.update){
            await updateMovie(
                {[yargsObject.filterKey]:yargsObject.filterValue}, 
                {[yargsObject.updateKey]:yargsObject.updateValue},
            )
            console.log(await readMovie())
        }
        // deleteOne MOVIE
        else if (yargsObject.delete){
            await deleteMovie(yargsObject.key, yargsObject.filter)
            console.log(await readMovie())
        }
        // create TV
        if (yargsObject.createTV){
            await createTV({title: yargsObject.title, timeslot: yargsObject.timeslot, network: yargsObject.network, day: yargsObject.day})
            console.log(await readTV())
        }
        // read TV
        else if (yargsObject.readTV){
            console.log(await readTV(yargsObject.key, yargsObject.filter))
            
        }
        // updateOne TV
        else if (yargsObject.updateTV){
            await updateTV(
                {[yargsObject.filterKey]:yargsObject.filterValue}, 
                {[yargsObject.updateKey]:yargsObject.updateValue},
            )
            console.log(await readTV())
        }
        // deleteOne TV
        else if (yargsObject.deleteTV){
            await deleteTV(yargsObject.key, yargsObject.filter)
            console.log(await readTV())
        }
        // Incorrect Input
        else {
        console.log("Unrecognised Input")
        }
        await mongoose.disconnect()
    }
    // ERROR
    catch (error) {
        await mongoose.disconnect()
        console.log(error)
    }

}


app(yargs.argv)