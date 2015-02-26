var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var x = parseFloat(req.query.x),
        y = parseFloat(req.query.y),
        method = req.query.method,
        result = 0;
    console.log(method,x,y);
    switch (method) {
        case "add":
            result = x + y;
            break;
        case "subtract":
            result = x - y;
            break;
        case "multiply":
            result = x * y;
            break;
        case "divide":
            result = x / y;
            break;
    }
    res.render('calculator', {title: 'Assignment 1',method:method,result:result});
});
router.post('/', function (req, res) {
    var x = parseFloat(req.body.x),
        y = parseFloat(req.body.y),
        method = req.body.method,
        result = 0;
    console.log(x,y);
    switch (method) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "x":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
    }

    res.send({"method": method, "result": result});
    console.log(result);
});
module.exports = router;
