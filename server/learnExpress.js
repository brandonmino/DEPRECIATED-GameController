const express = require('express')
const bodyParser = require('body-parser')
const app = express()                     // Instance of express

app.use(bodyParser.text())                // Idk converts to plain text i guess..

// Respond POST request is made to the homepage
app.post('/', function (req, res) {
  let body = req.body

  res.send('Connected')
  console.log(JSON.parse(body))
})

app.listen(6969, '50.28.161.59')          // PC IP in after comma
