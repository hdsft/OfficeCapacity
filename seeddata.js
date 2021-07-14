const Attendance = require("./attendance.js")
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/capdata', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connection succesfull")
});


Attendance.insertMany([
    {date: '21/06/2021', occupancy: 250},
    {date: '22/06/2021', occupancy: 400},
    {date: '23/06/2021', occupancy: 150},
    {date: '24/06/2021', occupancy: 250},
    {date: '25/06/2021', occupancy: 50000}
]).then(function(){
    console.log("data inserted")
}).catch(function(error) {
    console.log(error) 
});