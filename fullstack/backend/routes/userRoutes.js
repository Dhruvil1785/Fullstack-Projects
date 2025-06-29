const express = require('express');

const Router = express.Router();

const User = require('../models/User');


Router.get('/',async(req ,res) => {
    const users = await User.find();
    res.json(users);
});


Router.post('/', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.json(user);
});


Router.put('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new:true });
    res.json(user);
});


Router.delete('/:id', async(req,res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({message:'User deleted'});
});


module.exports = Router;