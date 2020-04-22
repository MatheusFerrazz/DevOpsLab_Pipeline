// Load modules 
const path = require("path")

//Load express module with `require` directive
var express = require('express')
var app = express()

//Define request response in root URL (/)
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/src/index.html")
})

//Public
app.use(express.static(path.join(__dirname, "public")))

//Launch listening server on port 8080
app.listen(8080, function () {
    console.log('App listening on port 8080!')
})