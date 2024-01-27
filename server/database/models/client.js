const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Client = sequelize.define('client', {
  
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
  
    
   
    role:{
      type:DataTypes.STRING,
      defaultValue:"client",
      allowNull:false,
  },
    mobile: DataTypes.INTEGER,
    
    activationCode : DataTypes.STRING
  
  },
  { timestamps: false });
  
  module.exports = Client;