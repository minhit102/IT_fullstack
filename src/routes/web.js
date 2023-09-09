const express = require("express");
const router = express.Router();
const { getHomepage, getHoidanit ,postCreateUser,getCreatePage,getedit} = require('../controllers/homeController')



router.get('/hoidanit', getHoidanit)
router.get('/create', getCreatePage)
router.get('/', getHomepage) 
router.post('/create-user', postCreateUser)
router.get('/edit', getedit);

module.exports = router;