const router = require('express').Router(); 

const {
    getUsers,
    createUser,
    getSingleUser,
    deleteUser,
    updateUser,
} = require('../../controllers/userControllers.js'); 

// /api/users
router.route('/').get(getUsers).post(createUser); 

router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    .delete(deleteUser)
module.exports = router; 