const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const mongoose = require('mongoose');
const Attendance = require("./attendance.js")
mongoose.connect('mongodb://localhost:27017/capdata', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connection succesfull")
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.get('/', (req, res) => {
  Attendance.find(function(err,attendance) {
    if (err) {throw err; }

    res.render('index', {attendance: attendance});
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})