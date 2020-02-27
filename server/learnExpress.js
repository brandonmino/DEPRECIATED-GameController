const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.text())

//Port and address for connecting and sending/receiving
const port = 6969
const address = '50.28.161.59'

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

  /*
  if the given descriptor in body_data is in The controller config json/list/whatever{
    if the action for that button is true, press the button
    else (if the button is false), then release the button
  }
  else (button doesn't exist), log and send back that the button was not recognized
  */

  res.send("Button Pressed")
})

//Listen in on port at that address
app.listen(port, address)     
