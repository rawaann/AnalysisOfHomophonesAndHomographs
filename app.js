const express = require('express')
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.urlencoded({extended : true}))


app.listen(process.env.PORT, function(){
    console.log("server is running")
})

app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html")
})

app.post('/', function(req, res){
    
})

module.exports.app = app;
