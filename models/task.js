const mongoose = require('mongoose');

//schema
const taskSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, "must provide a name"],
        trim: true,
        maxlength: [20, "name cannot be more than 20 characters"],
    },
    completed:{
        type: Boolean,
        default: false,
    },
})

//model
module.exports = mongoose.model("task", taskSchema);
