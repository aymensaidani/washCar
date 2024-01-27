const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Client = require("./client")
const Reservation = sequelize.define('reservation', {
  date: DataTypes.DATE,
  service:{
    type:DataTypes.STRING,
    allowNull:false,
},
location:{
  type:DataTypes.STRING,
  allowNull:false,
}

},
{ timestamps: false }
);

Reservation.belongsTo(Client);

module.exports = Reservation
