import express, { query } from 'express';
import studentList from './student.js';
import product from './product.js';
import Connection from './server/config/db.js';
import userModel from './server/apis/user/userModel.js';



const app = express();
const PORT=8000;
app.use(express.urlencoded({extended:true}));

Connection();
app.get("/", (req, res) => {
    res.send(`<h1 style='color:red' align='center'>Hello, Kaise ho aap?</h1>`);
});
app.get("/getAllStudent", (req, res) => {
    res.send(studentList);
});

app.get("/nameWithS/:value", (req, res) => {
    let filterStudnet = studentList.filter(student => student.name.startsWith(req.params.value));
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

app.get("/filterByQueryString",(req,res)=>{
    let filterStudent=studentList.filter(student => student.course==req.query.course && student.name==req.query.name);
    res.send(filterStudent);
})
app.get("/filterByParams/:course/:name",(req,res)=>{
    let filterStudent=studentList.filter(student => student.course==req.params.course && student.name==req.params.name);
    res.send(filterStudent);
})





app.get("/getAllProduct",(req,res)=>{
    res.send(product)
})

app.get("/getProductByQuery",(req,res)=>{
    // console.log(req.params);
    let fiterProduct=product.filter(productCat=> productCat.category==req.query.category)
    console.log(fiterProduct);
    res.send(fiterProduct)
})
app.get("/getProductByParams/:price",(req,res)=>{
    let fiterProduct=product.filter(productPrice=> productPrice.price<=req.params.price)
    res.send(fiterProduct)
})


//23-05-2024
app.post("/pass",(req,res)=>{
    const email=req.body.email;
    const pass=req.body.pass;
    try {
        if(email=="admin@gmail.com" && pass=="123"){
            res.json({status:200,message:"user login succesfully",success:true})
        }
        else{
            res.json({status:404,message:`User not found`,success:false})
        }
    } catch (error) {
        res.json({status:404,message:`error in pass route${error}`})
    }
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