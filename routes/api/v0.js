const express = require('express');
const Furniture = require('../../models/furniture');

const router = express.Router();

// get json from MongDB
router.get('/furnitures', (req, res) => {
  Furniture.find({}, (err, furnitures) => {
    if(err) {
      res.sendStatus(404)
    }
    res.json(furnitures)
  })
})

// get json from MongDB by id
router.get('/furnitures/:id', (req, res) => {
  Furniture.findOne({id: req.params.id}, (err, furnitures) => {
    if (err || !furnitures) {
      res.status(404).send({error:"Not found"})
    }
    res.json(furnitures)
  })
})

module.exports = router;