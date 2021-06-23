const mongoose = require("mongoose")

const schema = new mongoose.Schema({ date: 'string', occupancy: 'string' });
const Attendance = mongoose.model('Attendance', schema);

module.exports = Attendance