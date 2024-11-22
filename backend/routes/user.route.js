const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../modal/user.modal");
const userRoute = express.Router();

// Register route
userRoute.post("/register", async (req, res) => {
    const { userusername, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            userusername,
            email,
            password: hashedPassword
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to register" });
    }
});

// Login route
userRoute.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found, please sign up" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        const token = jwt.sign({ userID: user._id, userusername: user.userusername }, "abhay", { expiresIn: '1h' });
        res.status(200).json({ message: "User logged in successfully", token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to login" });
    }
});

module.exports = userRoute;