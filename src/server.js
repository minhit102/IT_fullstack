const express = require('express')
const path = require('path');
const app = express()
const port = 8080
const hostname = 'localhost'
require('dotenv').config()
console.log(process.env)
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public')));

app.get('/hoidanit', (req, res) => {
  //res.send('Hello World!123')
  res.render('sample.ejs')
})

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})