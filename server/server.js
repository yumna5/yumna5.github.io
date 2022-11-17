"use strict"
const log = console.log
const express = require('express')
const bodyParser = require('body-parser')
// enable CORS if in development, for React local development server to connect to the web server.
const cors = require("cors");
// mongoose and mongo connection
const { mongoose } = require("./db/mongoose")

const app = express()
const port = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

mongoose.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.listen(port, () => {
  log(`Listening on port ${port}...`);
});