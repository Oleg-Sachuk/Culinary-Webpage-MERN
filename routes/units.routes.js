const { Router } = require('express');
const router = Router();
const Unit = require('../models/unit');

router.get('/getunits', async (req,res) => {
    try {
        const units = await Unit.find();
        res.status(200).json({units});
        
    } catch (error) {
        return res.status(500).json({ message: "Could not find units, please try again" });
    }
} )

module.exports = router;