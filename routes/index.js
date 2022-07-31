const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller'); //Calling the home controller action from controllers

console.log('router loaded');

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));


module.exports = router;