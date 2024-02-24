const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');
app.use(cors());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/users',(req, res)=>{
    controller.getUsers(req, res, next => {
        res.send(users);
    }); f
});

app.post('/crateuser',(req, res)=>{
    controller.addUser(req.body, (callback) => {
        res.send(user);
    });
});

app.put('/updateuser',(req, res)=>{
    controller.updateUser(req.body, (callback) => {
        res.send(callback);
    });
});

app.delete('/deleteuser',(req, res)=>{
    controller.deleteUser(req.body, (callback) => {
        res.send(callback);
    });
});

module.exports = app;