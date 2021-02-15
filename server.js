const express = require('express');
const app = express();


//dotenv
const dotenv = require("dotenv");
dotenv.config();
const {PORT}= process.env;


app.listen(PORT, () => console.log(`Server listens at Portnumber: ${PORT}`));