'use strict';

const express = require('express');
// Create an router instance (aka "mini-app")
const router = express.Router();
const Note = require('../models/note')

/* ========== GET/READ ALL ITEM ========== */
router.get('/notes', (req, res, next) => {
  console.log('Get All Notes');

  const { searchTerm } = req.query;
  let filter = {};

  if (searchTerm) {
    const re = new RegExp(searchTerm, 'i');
    filter.title = { $regex: re }
  }

  Note.find(filter)
    .select('title created')
    .sort('created')
    .then(notes => {
      console.log('all notes found', notes);
      res.json(notes);
    })
    .catch(err => {
      console.log('error finding notes', err);
      res.json(err);
    });

});

/* ========== GET/READ A SINGLE ITEM ========== */
router.get('/notes/:id', (req, res, next) => {
  console.log("Get a single Note.")
  const { id } = req.params

  Note.findById(id)
    .select('title created')
    .sort('created')
    .then(note => {
      res.json(note);
    })
    .catch(err => {
      console.log('error finding note', err);
      res.json(err);
    });

});

/* ========== POST/CREATE AN ITEM ========== */
router.post('/notes', (req, res, next) => {
  console.log('Create a Note');



  Note.create(req.body)
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log('error while creating note', err);
      res.json(err);
    });

});

/* ========== PUT/UPDATE A SINGLE ITEM ========== */
router.put('/notes/:id', (req, res, next) => {

  console.log('all req body data', req.body);

  Note.findByIdAndUpdate({ _id: req.params.id }, req.body, {new: true})
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.log('error while updating note', err);
      res.json(err);
    });



});

/* ========== DELETE/REMOVE A SINGLE ITEM ========== */
router.delete('/notes/:id', (req, res, next) => {

  Note.findByIdAndRemove({_id: req.params.id})
  .then(result => {
    res.json(result);
  })
  .catch(err => {
    console.log('error while updating note', err);
    res.json(err);
  });
 
  // console.log('Delete a Note');
  // res.status(204).end();

});

module.exports = router;