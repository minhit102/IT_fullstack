const express= require("express");
const router = express.Router();
const {getHomepage,getHoidanit} = require('../controllers/homeController')



router.get('/hoidanit',getHoidanit )

router.get('/', getHomepage)

module.exports = router;