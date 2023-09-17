const express = require("express");
const router = express.Router();
const { getHomePage, getHoidanit ,postCreateUser,getCreatePage,getUpdatePage,postUpdateUser,postDeleteUser,deleteUser} = require('../controllers/homeController')



router.get('/hoidanit', getHoidanit)
router.get('/create', getCreatePage)
router.get('/', getHomePage) 
router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)
router.post('/delete-user/:id', postDeleteUser)
router.post('/delete', deleteUser)
router.get('/edit/:id',  getUpdatePage);

module.exports = router;