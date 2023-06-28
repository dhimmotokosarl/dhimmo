const { hash } = require('bcrypt');
const { sequelize } = require('../../config/database')

const { DataTypes } = require('sequelize');



const User = sequelize.define('User', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    uuid:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
           len: [3, 255]
        }
    },

    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            isEmail: true,
            len: [8, 255]
        }
    },

    password: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
            len: [8, 255]
        },
        // set(value){
        //     this.setDataValue('password', hash(value));
        // }
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
        validate:{
            len: [8 , 15],
            isNumeric: true,
        }
    },

    otp: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isNumeric: true,
            len: [4, 6]
        }
    },

    otp_status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },

    is_admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },

    role : {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4,10]
        }
    },

    image : {
        type: DataTypes.STRING,
        allowNull: true,
    },

    rate : {
        type: DataTypes.DOUBLE,
        allowNull: true,
    },

    is_active:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },

    is_deleted:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },

});

module.exports = User;