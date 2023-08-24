const express = require('express')
const path = require('path');
const app = express()
const port = 8080
const hostname = 'locahost'
console.log(process.env)
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello World!')
  res.render('sample.js')
})

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})