const express = require('express')
const app = express() 

app.get('/', function(req, res){
    res.send('hello from the other side, Adele') //route
})

//Routing
app.get('/users:id', function(req, res){ //route
    res.send("hello from Express USERS.........this routing" + req.params.id) //params (coming from parameter)
})

app.get('/profile', function(req, res){  //route
    res.send("hello from Express PROFILE........this is routing" + req.query.name) 
})

//HTTP Methods: get, post, put, delete

app.listen(8080)