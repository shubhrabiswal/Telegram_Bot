const express = require('express')
const bodyParser = require("body-parser");
const app = express()


const botRoute = require('../api/router/botRoute')


app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.send("working")
});

app.use('/api/v1', botRoute)


module.exports = app;