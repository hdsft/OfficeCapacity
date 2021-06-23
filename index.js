const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const Attendance = require("./attendance.js")
mongoose.connect('mongodb://localhost:27017/capdata', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connection succesfull")
});

app.get('/', (req, res) => {
  res.send('Office Capacity')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})