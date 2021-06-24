const mongoose = require("mongoose")

const schema = new mongoose.Schema({ date: String, occupancy: Number });
const Attendance = mongoose.model('Attendance', schema);

module.exports = Attendance