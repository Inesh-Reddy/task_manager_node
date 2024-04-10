const mongoose = require('mongoose');

//schema
const taskSchema = new mongoose.Schema({
    name:String,
    completed:Boolean,
})

//model
module.exports = mongoose.model("task", taskSchema);
