import express from "express";
import mongoose from "mongoose";

import userRouter from './routes/users.js'
import adminRouter from './routes/admin.js'
import eventRouter from './routes/event.js'
import bodyParser from "body-parser";
import cors from 'cors';

mongoose.connect('');

const app=express();
app.use(cors());
const port = 8000;

app.use(bodyParser.urlencoded({extended:true}));

app.use('/user',userRouter);
app.use('/admin',adminRouter);
app.use('/event',eventRouter);





app.listen(port,()=>{
    console.log(`Server is running on ${port} `);
})
