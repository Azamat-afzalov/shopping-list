const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get all items
// @access Public
router.get('/', async(req, res) => {
    try {
        const items = await Item.find().sort({ data: -1 });
        return res.json(items)
    } catch (err) {
        console.log(err);
    }

});

// @route POST api/items
// @desc Create an item
// @access Public
router.post('/', async(req, res) => {
    const newItem = new Item({
        name: req.body.name
    });
    try {
        const createdItem = await newItem.save();
        res.json(createdItem);
    } catch (err) {
        console.log(err);
    }
});

// @route DELETE api/items/:id
// @desc Delete an item
// @access Public
router.delete('/:id', async(req, res) => {


    try {
        const item = await Item.findById(req.params.id);
        await item.remove();
        res.json({ success: true })
    } catch (err) {
        res.status(404).json({ success: false })
    }
});

module.exports = router;