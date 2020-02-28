const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.text())
const robot = require("robotjs");

//Port and address for connecting and sending/receiving
const port = 3000
const address = '50.28.150.90'

//Receive POST requests for an initial connection from controller to server
app.post('/init_connect', function (req, res) {
  let body_data = JSON.parse(req.body)

  //Body with have the controller config it in
  //Handle the controller config here

  res.send('Your controller has connected to the server')
  console.log("Controller has connected to server")
})

//Receive POST requests for buttons from RN front end
app.post('/data_endpoint', function (req, res) {
  let body_data = JSON.parse(req.body)
  let key = Object.keys(body_data)

  if (body_data[key] == true){
    robot.keyToggle(key[0], 'down')
    console.log(key[0] + " Button Pressed")
    res.send(key[0] + " Button Pressed")
  }
  else if (body_data[key] == false){
    robot.keyToggle(key[0], 'up')
    console.log(key[0] + " Button Released")
    res.send(key[0] + " Button Released")
  }
  else{
    console.log("Given status not valid")
    res.send("Given status not valid")
  }
})

//Listen in on port at that address
app.listen(port, address => console.log(`App listening on port ${port}!`))     
