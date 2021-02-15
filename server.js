const express = require('express');
const app = express();


//dotenv
const dotenv = require("dotenv");
dotenv.config();
const {PORT, DBUSER, DBPW, DBHOST, DBNAME}= process.env;

// body-parser setup
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//mongoose setup
const mongoose = require("mongoose");
const mongoDB = `mongodb+srv://${DBUSER}:${DBPW}@${DBHOST}/${DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, {useNewUrlParser: true});

const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const appRoute = require("./routes/App");

app.use("/app", appRoute);
app.get("/", (_, res) => {
  res.send("Witamy na naszej stronie!");
});


app.listen(PORT, () => console.log(`Server listens at Portnumber: ${PORT}`));