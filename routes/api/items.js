const express = require('express');
const router = express.Router();

// Item model
const Item = require('../../models/Item');

// Create a database item
router.post('/', (req, res) => {
    const newItem = new Item({
        jobTitle: req.body.jobTitle,
        salary: req.body.salary,
        description: req.body.description
    });
    newItem.save().then(item => res.json(item))
});

// Get all database items
router.get('/', (req, res) => {
    Item.find().then(items => res.json(items))
});

// Get a single database item
router.get('/:id', (req, res) => {
    Item.findById(req.params.id).then(item => res.json(item))
        .catch(error => { res.status(400).json({error:'Error, item not found, please check the id is correct. '}) })
});

// Delete database item
router.delete('/:id', (req, res) => {
    Item.findOneAndDelete(req.params.id)
        .then(item => item.remove()
            .then(res.json('sucess')))
        .catch(error => { res.status(404).json(error)})
})

module.exports = router;