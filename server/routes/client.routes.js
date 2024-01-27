const express = require('express');
const router = express.Router();

const {resgisterClient,login,checkEmail, getAllClient}= require("../controllers/client")

router.post("/register",resgisterClient)
router.post("/login",login)
router.get("/checkmail",checkEmail)
router.get("/getall",getAllClient)






module.exports = router;