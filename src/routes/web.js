const express = require("express");
const router = express.Router();
const { getHomePage, getHoidanit ,postCreateUser,getCreatePage,getedit} = require('../controllers/homeController')



router.get('/hoidanit', getHoidanit)
router.get('/create', getCreatePage)
router.get('/', getHomePage) 
router.post('/create-user', postCreateUser)
router.get('/edit', getedit);

module.exports = router;