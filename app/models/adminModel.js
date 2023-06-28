const { sequelize } = require('../../config/database')

const { DataTypes } = require('sequelize');



const Admin = sequelize.define('Admin', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    email: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    
    password: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    is_email_verified:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
    email_verified_at: {
        type: DataTypes.DATE,
        allowNull: true,
    }, 

    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    otp: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    otp_status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

    is_active:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },

    is_deleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }

});


module.exports = Admin;