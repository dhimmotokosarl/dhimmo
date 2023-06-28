const { sequelize } = require('../../config/database')

const { DataTypes } = require('sequelize');



const Subscription = sequelize.define('Subscription', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    uuid:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
    },

    expires_at : {
        type: DataTypes.DATE,
        allowNull: false,
    },

    
    is_expired: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },

    subscription_mode: {
        type: DataTypes.STRING,
        allowNull: false,
    },

});

module.exports = Subscription;