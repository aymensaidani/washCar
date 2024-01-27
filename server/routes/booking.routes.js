const express = require('express');
const router = express.Router();
const {bookDate}= require("../controllers/booking")

router.post("/booking/:clientId",bookDate)

module.exports = router;