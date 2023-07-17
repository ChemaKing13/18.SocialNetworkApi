const { User } = require('../models'); 

module.exports = {
    //get all users
    async getUsers(req, res) {
        try {
            const users = await User.find(); 
            res.json(users); 
        } catch (err) {
            res.status(500).json(err); 
        }
    },
    //post a new user 
    async createUser(req, res) {
        try {
            const user = await User.create(req.body); 
            res.json(user); 
        } catch (err) {
            console.log(err); 
            return res.status(500).json(err); 
        }
    },
}; 