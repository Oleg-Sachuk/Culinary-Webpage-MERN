const { Router } = require('express');
const router = Router();
const User = require('../models/user');
const auth = require('../middleware/auth.middleware');

router.post('/getuser', async (req,res) => {
    try {
        const {userId} = req.body;
        const userdata = await User.findOne({ _id: userId});
        res.status(200).json({userdata});
        
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong, please try again" });
    }
} )

// router.get('/getuser/:id',auth, async (req,res) => {
//     try {

//         const userdata = await User.findById(req.params.id);
//         res.json(userdata);
        
//     } catch (error) {
//         return res.status(500).json({ message: "Something went wrong, please try again" });
//     }
// } )

module.exports = router;