const express= require("express");
const router = express.Router();



router.get('/hoidanit', (req, res) => {
    //res.send('Hello World!123')
    res.render('sample.ejs')
  })

router.get('/minhht', (req, res) => {
    //res.send('Hello World!123')
    res.send('Hoang Trong Minh')
  })

module.exports = router;