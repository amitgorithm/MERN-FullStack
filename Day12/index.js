const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3005;

mongoose.connect("mongodb://127.0.0.1:27017/abcd");

//middleware
app.use(express.json())

const xyz = mongoose.model('student', { name: String, age: Number }); // this is schema



// const hello = new xyz({ name: 'Amit', age : 34 });
//     hello.save()
//     .then(() => console.log('student added'));


// home page
app.get("/",(req,res)=>{
  res.send("Welcome to express students")

})
// about page
app.get("/about",(req,res)=>{
  res.send("About Us Page")

})

app.get("/contact",(req,res)=>{
  res.send("Contact Us")
})

// get all students list
app.get("/students",(req,res)=>{
    xyz.find()
          .then(data => res.send(data))
          
})




// create student
app.post("/students",(req,res) =>{
  const ss = new xyz(req.body)
  ss.save()
        .then(data => res.send(data))
})

// dynamic routing
app.get('/hello/:id',(req,res)=>{
  res.send(`The usersid is : ${req.params.id}`)
})

// delete student
app.delete("/students/:id", (req,res) =>{
      xyz.findByIdAndDelete(req.params.id)
              .then(() => res.send("Deleted Succesfully"))
})

app.listen(PORT, () => {
  console.log(`Learning Express on ${PORT}`)
})