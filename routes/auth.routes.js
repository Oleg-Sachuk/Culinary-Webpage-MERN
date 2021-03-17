const { Router } = require('express');
const router = Router();
const User = require('../models/user');
const config = require('config');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

router.post('/register',
    [check('email', "Incorrect E-mail").isEmail(),
    check('password', "Incorrect password, min length is 6 symbols").isLength({ min: 6 }),
    check('login', "Incorrect login, max length is 10 symbols").isLength({ max: 10 })],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Incorrect register data"
                })
            }

            const { email, password, login } = req.body;
            const candidate = await User.findOne({email});
            const candidatelog = await User.findOne({login});

            if (candidate || candidatelog) {
                return res.status(400).json({ message: "This user already exists" });
            }

            const hashedPassword = await bcrypt.hash(password, 15);
            const user = new User({ email, password: hashedPassword, login });

            await user.save();

            res.status(201).json({ message: "User was succesfully created" });

        } catch (error) {
            res.status(500).json({ message: "Something went wrong, please try again" });
        }
    })

router.post('/login',
    [check('email', "Enter correct E-mail").normalizeEmail().isEmail(),
    check('password', "Enter correct password").exists(),
    check('login','This login already exists').exists()],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Incorrect login data"
                })
            }

            const {email, password, login} = req.body;

            const user = await User.findOne({email, login});
            if(!user){
                return res.status(400).json({message: "User wasn't found"})
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                return res.status(400).json({message: "Incorrect password, please try again"})
            }

            if(login != user.login){
                return res.status(400).json({message: "Wrong login, please try again"})
            }

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            )

            res.status(200).json({ token, userId: user.id });

        } catch (error) {
            res.status(500).json({ message: "Something went wrong, please try again" });
        }
    })

module.exports = router;