const Client = require('../database/models/client')
const jwt = require('jsonwebtoken')
const bcrypt = require ('bcrypt')

const getAllClient = async (req, res) => {
  try {
    const client = await Client.findAll();
    res.status(200).json(client);
  } catch (error) {
    console.error('Get client Error:', error);
    res.status(500).json({ error: 'Failed to retrieve clients' });
  }
}

const resgisterClient = async (req, res) => {
    try {
      const { email , password , username , mobile } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the number of salt rounds
  
      const newClient = await Client.create({
        email,
        username,
        mobile,
        password: hashedPassword,
      });
      res.status(201).json(newClient);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error creating Client", error: error.message });
    }
  };
  const checkEmail = async (req, res) => {
    const { email } = req.body;
  
    try {
      console.log('Checking email:', email);
  
      const existingClient = await Client.findOne({
        where: { email }, // Specify the where option to avoid the Sequelize warning
      });
  
      if (existingClient) {
        console.log('Email already exists:', email);
        return res.json({ available: false });
      } else {
        console.log('Email is available:', email);
        return res.json({ available: true });
      }
    } catch (error) {
      console.error('Error checking email availability:', error);
      res.status(500).json({ available: false });
    }
  };
  
  
  
  const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const client = await Client.findOne({ where: { email } });
  
      if (!client) {
        res.status(404).json({ message: "Client not found" });
        return;
      }
  
      const passwordMatch = await bcrypt.compare(
        password,
        client.password
      );
      if (!passwordMatch) {
        res.status(401).json({ message: "Incorrect password" });
        return;
      }
  
      const token = jwt.sign(
        {
          clientId: client.id,
          username: client.username,
          role : client.role
          
        },
        "Client",
        { expiresIn: "1h" }
      );
      res.cookie('token', token, { httpOnly: true, maxAge: 3600000 });

      res.status(200).json({ message: "Login successful", token });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error during login", error: error.message });
    }
  };
  module.exports = {
    resgisterClient,
    login,
    checkEmail,
    getAllClient
  };