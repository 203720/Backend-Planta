const express=require('express');
const app=express();
const cors=require('cors');
const mysql = require("mysql");

//server port 
const port = 3001;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({
    origin:'*'
}))

// Routes
app.use(require('./routes/index.routes'))

// Starting the server
app.listen(port,()=>{
    console.log('server on port: '+ port)
})

