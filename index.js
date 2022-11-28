
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import {update,deletetodo, signup, login} from './Controllers/controller.js'
import express from 'express';
import cors from 'cors';

const app= express();


const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 



const PORT= 5001;


//Connecting to database
mongoose.connect('mongodb://localhost:27017/tododb');


app.use(bodyParser.json());
app.post('/signup',signup);
app.post('/login',login)
app.patch('/update-todo/:id',update)
app.delete('/delete/:id',deletetodo)



app.listen(PORT, ()=> console.log(`Server running on port: http://localhost:${PORT}`) );

