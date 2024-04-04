const express = require('express');
const app = express();
const tasks = require("./routes/tasks"); // this is a middleware
const port =3000;


app.use(express.json());
// routes
app.get("/", (req, res)=>{
    res.status(200);
    res.send("Task Manager App");
})
app.use('/api/v1/tasks', tasks); //when anything hits at '/api/v1/tasks--->tasks middleware is called'

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}...`);
})