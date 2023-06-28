/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//Dependencies imports 
const express = require('express')
const app = express()
const cors = require('cors')
const  {sequelize, connection} = require('./config/database')
require('dotenv').config();
const routes = require('./routes/index');
const {notFound, errorHandler } = require('./app/middlewares/errorHandler')

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//variables 

const PORT = process.env.SERVER_PORT || 3000;

var corsOptions = {
  origin: 'https://localhost:3000' //url of the frontend to consume the api backend
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors(corsOptions))

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//api endpoints

app.use('/api/v1', routes);

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//app launch
app.listen(PORT, async () => {
  console.log(`Server is running on http://localhost:${PORT}`)
  await sequelize.sync({alter: true})
  await connection()
});
