const express = require('express')
const connectDB = require('./config/config')
const dotenv = require('dotenv')
const morgan = require('morgan');
const { bgMagenta } = require('colors');
require('colors')

dotenv.config()

connectDB()

const app = express()
app.use(express.json())
app.use(morgan('dev'))

app.use('/api/pizzas', require('./routes/pizzaRoute'));
app.use('/api/users',require("./routes/userRoute"));
app.use('/api/orders',require('./routes/orderRoute'));
app.get('/',(req,res)=>{
    res.send('<h1>Hello From Node Backend hvhguj</h1>');
});
const port =process.env.PORT || 8080
app.listen(port, ()=>{
    console.log(`Server Running on ${process.env.NODE_ENV} mode on port no ${process.env.PORT}`.bgMagenta.white);
});