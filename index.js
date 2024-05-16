import express from 'express';
import studentList from './student.js';

const app = express();
const PORT=8000;
app.get("/", (req, res) => {
    res.send("hello")
});
app.get("/getAllStudent", (req, res) => {
    res.send(studentList);
});

app.get("/nameWithS", (req, res) => {
    let filterStudnet = studentList.filter(student => student.name.startsWith('s') || student.name.startsWith('S'));
    res.send(filterStudnet);
})
app.get("/meanStudents", (req, res) => {
    let filterStudnet = studentList.filter(student => student.course=="mean");
    res.send(filterStudnet);
})
app.get("/mernStudents", (req, res) => {
    let filterStudnet = studentList.filter(student => student.course=="mern");
    res.send(filterStudnet);
})
app.get("/phpStudents", (req, res) => {
    let filterStudnet = studentList.filter(student => student.course=="php");
    res.send(filterStudnet);
})




app.listen(PORT, (err) => {
    if (err) {
        console.log("Server is not  running");
    }
    else {
        console.log("Server is running");
    }
})