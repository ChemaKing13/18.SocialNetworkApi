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
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
                .select('-__v'); 
            
            if (!user) {
                return res.status(404).json({ message: 'No user with that ID'});
            }
            res.json(user); 
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
    //delete a user by its ID
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                res.status(404).json({ message: 'No user with that ID'}); 
            }
            res.json({ message: 'User feleted successfully' });
        } catch (err) {
            res.status(500).json(err); 
        }
    },
    //update a user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $set: req.body }, // this operator is used to update the user with the new data
                { runValidators: true, new: true }
            ); 

            if (!user) {
                res.status(404).json({ message: 'No user with this id'}); 
            }
            res.json(user); 
        } catch (err) {
            res.status(500).json(err); 
        }
    },
}; 