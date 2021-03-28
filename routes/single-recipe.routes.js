const { Router } = require('express');
const router = Router();
const Receipt = require('../models/receipt');
const auth = require('../middleware/auth.middleware');

router.get('/recipe/:id', async (req, res) => {
    try {
        const recipe = await Receipt.find({ _id: req.params.id });
        res.status(200).json({ recipe });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})

module.exports = router;