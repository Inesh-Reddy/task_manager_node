const getAllTasks = (req, res)=>{
    res.send("Getting all tasks");
}

const createTask = (req, res)=>{
    res.json(req.body)
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