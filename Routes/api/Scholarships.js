const express = require('express');
const router = express.Router();


//Item Model

const Scholarships = require('../../Models/Scholarships');

router.get('/', (req, res) => {
    Scholarships.find()
    .sort({ date: -1})
    .then(Scholarships => res.json(Scholarships))
})



router.post('/', (req, res) => {

    const newScholarships = new Scholarships({
        title: req.body.title,
        description: req.body.description
    });

    newScholarships.save().then(Scholarships => res.json(Scholarships));
})

//Route     Delete api/items
// desc     Delete a Items
// access   Public

router.delete('/:id', (req, res) => {
    Scholarships.findById(req.params.id)
  .then(Scholarships => Scholarships.remove().then(() => res.json({
      success: true
  })))
  .catch(err => res.status(404).json({success: false}))
})


module.exports = router