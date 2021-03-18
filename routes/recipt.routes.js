const { Router } = require('express');
const router = Router();
const Receipt = require('../models/receipt');
const auth = require('../middleware/auth.middleware');

router.post('/getitems', async (req,res) => {
    try {
        const {lim} = req.body;
        const recipes = await Receipt.find().limit(lim);
        res.status(200).json({recipes});
        
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong, please try again" });
    }
} )

module.exports = router;