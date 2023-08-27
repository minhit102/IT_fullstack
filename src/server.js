require('dotenv').config()

const express = require('express')
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')
const mysql = require('mysql2');

const app = express()
const port = process.env.port;
const hostname = process.env.hostname;

configViewEngine(app)
// khai bao routes
app.use('/test',webRoutes);
app.use('/v1',webRoutes);

const connection = mysql.createConnection({
  host: 'localhost',
  port : 3307,
  user: 'root',
  password: '123456',
  database: 'hoidanit'
});
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected")
})
connection.query(
  'SELECT * FROM Users;',
  (err,results,fail) => {
    console.log(results);
  }
)
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs')

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})