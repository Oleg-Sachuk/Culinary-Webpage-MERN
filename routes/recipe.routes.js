const { Router } = require('express');
const router = Router();
const Receipt = require('../models/receipt');
const auth = require('../middleware/auth.middleware');

router.get('/getrecipe', async (req, res) => {
    try {
        // const {lim} = req.body;
        const recipes = await Receipt.find();
        res.status(200).json({ recipes });

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong, please try again" });
    }
})

router.post('/setrecipe', async (req, res) => {
    try {

        const { name, description, cooking, pictures, ingredient } = req.body;

        const check = await Receipt.findOne({ description });

        if (check) {
            return res.status(400).json({ message: "This recipe already exists" });
        }

        const recipe = new Receipt({ name, description, cooking, pictures, ingredient });

        await recipe.save();

        res.status(201).json({ message: "Recipe was succesfully created" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

module.exports = router;