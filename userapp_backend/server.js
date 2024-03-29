const express = require('express');
const app = express();
const cors = require('cors');

const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose') ;
const router = require('./router')

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://hasitha7:hasitha7@studentmn.u9mouox.mongodb.net/?retryWrites=true&w=majority&appName=StudentMN';

const connect = async ()=> {
    try{
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.log('MomgoDB Error: ', error);
    }
};

connect();

const server = app.listen(port, host, ()=>{
    console.log(`Node server is listening to ${server.address().port}`) 
});

app.use('/api', router);