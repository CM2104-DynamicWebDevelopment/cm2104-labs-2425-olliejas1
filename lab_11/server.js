
var express = require('express');
app.use(express.static('public'))
var app = express();




app.get('/', function(req, res){
 res.send("Hello world! by express");
});

app.get('/test', function(req, res){
    res.send("this is route 2");
   });

app.get('/add', function(req, res){
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);
    res.send("X + Y = " + (x + y));
});

app.get('/calc',function(req,res){
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y)
    var operator = req.query.operator;

    if (operator === "add") res.send("Result = " + (x+y));
    else if (operator === "sub)") res.send("Result =" + (x-y));
    else if (operator === "mul)") res.send("Result =" + (x*y));
    else if (operator === "div)") res.send("Result =" + (x/y));
    else res.send("Invalid Operator");
})



app.listen(8080);