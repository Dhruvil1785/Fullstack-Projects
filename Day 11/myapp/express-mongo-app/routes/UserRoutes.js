const express = require('express');
const router = express.Router();
const USer = require('../models/User');

//Get all users
router.get('/',async(req, res) => {
    const users = await User.find();
    res.render('users', {users});
});

//POST a new user
router.post('/',async(req, res) =>{
    const {name, email, age } = req.body;
    await User.create({ name, email, age});
});

//PUT update user
router.put('/:id', async(req, res) => {
    const {name, email, age} = req.body;
    await User.findByIdAndUpdate(req.params.id,{ name, email, age});
    res.json({message: 'User updated'});
});

//Delete user
router.delete('/:id',async(req, res) => {
    await User.findByIdAndUpdate(req.params.id);
    res.json({ message: 'User deleted' });
});

module.exports = router;