const express = require('express');
const router = express.Router();


//Item Model

const Item = require('../../Models/Items');

//Route     Get api/items
// desc     Get All Items
// access   Public

router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1})
    .then(items => res.json(items))
})

//Route     POST api/items
// desc     Create Items
// access   Public

router.post('/', (req, res) => {

    const newItem = new Item({
        title: req.body.title,
        description: req.body.description
    });

    newItem.save().then(item => res.json(item));
})

//Route     Delete api/items
// desc     Delete a Items
// access   Public

router.delete('/:id', (req, res) => {
  Item.findById(req.params.id)
  .then(item => item.remove().then(() => res.json({
      success: true
  })))
  .catch(err => res.status(404).json({success: false}))
})


module.exports = router