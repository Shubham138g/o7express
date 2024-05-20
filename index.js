import express from 'express';
import studentList from './student.js';

const app = express();
const PORT=8000;
app.get("/", (req, res) => {
    res.send(`<h1 style='color:red' align='center'>Hello, Kaise ho aap?</h1>`);
});
// app.get("/getAllStudent", (req, res) => {
//     res.send(studentList);
// });

app.get("/nameWithS/:value", (req, res) => {
    let filterStudnet = studentList.filter(student => student.name.startsWith(req.params.value));
    res.send(filterStudnet);
})
// app.get("/meanStudents", (req, res) => {
//     let filterStudnet = studentList.filter(student => student.course=="mean");
//     res.send(filterStudnet);
// })
// app.get("/mernStudents", (req, res) => {
//     let filterStudnet = studentList.filter(student => student.course=="mern");
//     res.send(filterStudnet);
// })
// app.get("/phpStudents", (req, res) => {
//     let filterStudnet = studentList.filter(student => student.course=="php");
//     res.send(filterStudnet);
// })

app.get("/filterByQueryString",(req,res)=>{
    let filterStudent=studentList.filter(student => student.course==req.query.course && student.name==req.query.name);
    res.send(filterStudent);
})
app.get("/filterByParams/:course/:name",(req,res)=>{
    let filterStudent=studentList.filter(student => student.course==req.params.course && student.name==req.params.name);
    res.send(filterStudent);
})




//server handling
app.listen(PORT, (err) => {
    if (err) {
        console.log("Server is not  running");
    }
    else {
        console.log("Server is running");
    }
})