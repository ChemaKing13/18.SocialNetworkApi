const router = require('express').Router(); 

const {
    getUsers,
    createUser,
    getSingleUser,
    deleteUser,
    updateUser,
    addFriend,
    // removeFriend,
} = require('../../controllers/userControllers.js'); 

// /api/users
router.route('/')
    .get(getUsers)
    .post(createUser); 

router
    .route('/:userId')
    .get(getSingleUser)
    .put(updateUser)
    // .delete(deleteUser)

router
    .route('/:userId/friends/:friendsId')
    .post(addFriend)
    // .delete(removeFriend)

module.exports = router; 