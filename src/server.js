require('dotenv').config()

const express = require('express')
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const port = process.env.port;
const hostname = process.env.hostname;

configViewEngine(app)
app.use('/test', webRoutes);
app.use('/', webRoutes);




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')


app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})