const Task = require('../models/task')

const getAllTasks = async (req, res)=>{
    try{
        const tasks = await Task.find({});
        res.status(200).json({
            tasks:tasks,
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

const getSingleTask =  async (req, res)=>{
    try {
        const{ id:taskId } = req.params;
        const task = await Task.findOne({ _id:taskId });
        if(!task){
            return res.status(404).json({
                msg:`There is no existing task with id : ${taskId}`,
            })
        }
        res.status(200).json({
            task:task
        });
    } catch (e) {
        res.status(500).json({
            msg: e,
        })
    }
}

const updateTask = async (req, res)=>{
    try {
        const {id:taskId} = req.params;
        const taskToUpdate = await Task.findOneAndUpdate({ _id:taskId, completed:true});
        // if(!taskToUpdate){
        //     return res.status(404).json({
        //         msg: `no id with : ${taskId}`,
        //     })
        // }
        res.status(200).json({ 
            msg: ` ${taskId} updated successfully`,
        })
    } catch (e) {
        res.status(500).json({
            msg: e,
        })
    }
}

const deleteTask = async (req, res)=>{
    try {
        const {id:taskId} = req.params;
        const task = await Task.findOneAndDelete({ _id:taskId });
        if(!task){
            return res.status(404).json({
                msg: `no task with id : ${taskId}`,
            })
        }
        res.status(200).json({
            task,
        })
    } catch (error) {
       res.status(500).json({
        msg: e,
       }) 
    }
}

module.exports={
    getAllTasks,
    createTask,
    getSingleTask,
    updateTask,
    deleteTask
}