const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const sequelize = require("./database/db")


const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
const PORT =  3001;
const clientRoute = require("./routes/client.routes")
app.use("/api/client", clientRoute)
const bookingRout = require("./routes/booking.routes")
app.use("/api",bookingRout)

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    return sequelize.sync({ force: false });
  })
  .then(() => {
    console.log('Models are synchronized with the database.');
    app.listen(PORT, function () {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });