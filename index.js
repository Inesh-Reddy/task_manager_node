const express = require('express');
const app = express();
const tasks = require("./routes/tasks"); 
const port =3000;
const connectDB = require('./db/connection');
require('dotenv').config()


app.use(express.json());


app.get("/", (req, res)=>{
    res.status(200);
    res.send("Task Manager App");
})
app.use('/api/v1/tasks', tasks);

const start = async()=>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, ()=>{
            console.log(`Server is listening on port ${port}...`);
        })
    } catch (error) {
        console.log(`error`);
    }
}
start();