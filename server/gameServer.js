const express = require('express')
const app = express()
const robot = require("robotjs");

//Port and address for connecting and sending/receiving
const port = 3000
app.use(express.text());

//Receive POST requests for an initial connection from controller to server
app.post('/init_connect', function (req, res) {
  //Body with have the controller config it in
  //Handle the controller config here

  res.send('Your controller has connected to the server')
  console.log("Controller has connected to server")
})

//Receive POST requests for buttons from RN front end
app.post('/data_endpoint', function (req, res) {
  let body_data = JSON.parse(req.body)
  
  if (body_data[state] == true){
    robot.keyToggle(body_data[key], 'down')
    console.log(body_data[key] + " Button Pressed")
    res.send(body_data[key] + " Button Pressed")
  }
  else if (body_data[state] == false){
    robot.keyToggle(body_data[key], 'up')
    console.log(body_data[key] + " Button Released")
    res.send(body_data[key] + " Button Released")
  }
  else{
    console.log("Given state not valid")
    res.send("Given state not valid")
  }
})

//Listen in on port
app.listen(port, () => console.log(`App listening on port ${port}!`))     
