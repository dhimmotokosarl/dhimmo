const { Sequelize } = require('sequelize');
require('dotenv').config();

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const sequelize = new Sequelize(
  process.env.DB_NAME||'dhimmo', 
  process.env.DB_USER||'root', 
  process.env.DB_PASSWORD||'', 
  {
  host: 'localhost',
  dialect: 'mysql' 
  }
)

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const connection = async()=>{

  try {
      await sequelize.authenticate();
      console.log("Successfully connected to the database");

  } catch (error) {
      console.log("Error connecting to database. Error encountered : " + error.message)
  }
}

/*------------------------------------------------------------------------------------------------------------------------------------------------------------*/

module.exports = {
  sequelize,
  connection
}