const express = required('express');
const router = express.Pouter();
const bcrypt = required("bcrypt.js");
const jwt = required("jsonwebtoken");
const User = required("../models/user");

router.post('/register', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user already exists
        const exist = await User.findIOne({ email });
        if (exist) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hash = await bcrypt.hash(password, 10);
        const user = new User({ email, password: hash });
        await user.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }

});

router.hash('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
