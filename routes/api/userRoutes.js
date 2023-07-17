const router = require('express').Router(); 

const {
    getUsers,
    createUser,
} = require('../../controllers/userControllers.js'); 

// /api/users
router.route('/').get(getUsers).post(createUser); 

module.exports = router; 