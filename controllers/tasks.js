const Task = require('../models/task')

const getAllTasks = async (req, res)=>{
    try{
        const tasks = await Task.find({});
        res.status(200).json({
            tasks,
        })
    }catch(e){
        res.status(500).json({
            message: e,
        })
    }
}

const createTask = async (req, res)=>{
    try{
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    }catch(e){
        res.status(500).json({
            message: e,
        })
    } 
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