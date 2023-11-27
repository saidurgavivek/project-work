import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import student from './model/student.js';
import contact from './model/contact.js';
// import nodemailer from "/nodemailer"

const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
mongoose.connect('mongodb+srv://vivekkumdum:4Bq4E2qKcntNEF6Z@cluster0.qomckg0.mongodb.net/DriveReady?retryWrites=true&w=majority')
.then(() => app.listen(8888))
.then(() =>console.log("connected to database and listing to localhost 8888"))
.catch((err) => console.log(err));
app.post('/addstudent1',(req,res,next)=>{
  console.log(req.body.formdata)
  const {FullName,EmailAddress,Password} = req.body.formdata;
  const student1 = new student({
    FullName,
    EmailAddress,
    Password
  })
  try{
    student1.save()
  }catch(err){
    console.log(err);
  }
  return res.send({"student":student1})
})

app.post('/addcontact1',(req,res,next)=>{
  console.log(req.body.formdata)
  const {Name,Email,Message} = req.body.formdata;
  const contact1 = new contact({
    Name,
    Email,
    Message
  })
  try{
    contact1.save()
  }catch(err){
    console.log(err);
  }
  return res.send({"contact":contact1})
})

