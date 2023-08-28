const express = require("express");
const router = express.Router();
const { getHomepage, getHoidanit ,postCreateUser} = require('../controllers/homeController')



router.get('/hoidanit', getHoidanit)

router.get('/', getHomepage) 
router.post('/create-user', postCreateUser)

module.exports = router;