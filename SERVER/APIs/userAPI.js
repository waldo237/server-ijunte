const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');

router.get('/:id', (req, res)=>{
   user = {
        name:"waldo",
        lastName: "Milanes",
        id: req.params.id
    }
    res.status(200).json(user);
})


router.post('/', async(req, res)=>{
    console.log(req.query)
    const user = new userModel(req.query);
    await user.save();
    res.status(200).json(user);
})

module.exports = router;