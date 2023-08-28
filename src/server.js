require('dotenv').config()

const express = require('express')
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')

const app = express()
const port = process.env.port;
const hostname = process.env.hostname;

configViewEngine(app)
// khai bao routes
app.use('/test', webRoutes);
app.use('/v1', webRoutes);

app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
configViewEngine(app)


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})