const mongoose = require('mongoose')
const dotenv = require('dotenv')
require('colors')
const Pizza = require('./models/pizzaModel')
const Pizzas = require("./data/pizza-data")
const connectDb = require("./config/config")

dotenv.config()
connectDb();

const importData =async() => {
    try {
        await Pizza.deleteMany()
        const sampleData = Pizzas.map(pizza =>{return{...pizza}})
        await Pizza.insertMany(sampleData)
        console.log('DATA IMPORTED'.bgGreen.white)
        process.exit()
    } catch (error) {
        console.log(`${error}`.bgRed.white)
        process.exit(1)
    }
}


const dataDestroy = ()=> {

}
if(process.argv[2]=== '-d'){
    dataDestroy()
}
else{
    importData()
}
