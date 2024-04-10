const Task = require('../models/task')

const getAllTasks = (req, res)=>{
    res.send("Getting all tasks");
}

const createTask = async (req, res)=>{
    const task = await Task.create(req.body);
    res.status(201).json({ task });
}

const getSingleTask = (req, res)=>{
    res.send("getting Single Task");
}

const updateTask = (req, res)=>{
    res.send("Updated created");
}

const deleteTask = (req, res)=>{
    res.send("Deleted created");
}

module.exports={
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}