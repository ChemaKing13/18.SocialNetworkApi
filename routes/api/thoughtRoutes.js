const router = require('express').Router(); 

const {
    getThoughts,
    createThought,
    getSingleThought,
    updateThought,
    deleteThought,
    createReation,
    deleteReaction,

    

} = require('../../controllers/thoughtControllers.js'); 

// /api/thoughts
router
    .route('/')
    .get(getThoughts)
    .post(createThought)

router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought)

router
    .route('/:thoughtId/reactions')
    .post(createReation)
    
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)
    
module.exports = router; 