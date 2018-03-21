'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { MONGODB_URI } = require('../config');

const {Note} = require('../models/note');

mongoose.connect(MONGODB_URI)
  .then(() => {
    const searchTerm = 'ways';


    return Note.find({title: {$regex: searchTerm}})
      .sort('created')
      .then(results => {
        console.log(results);
      })
      .catch(console.error);
  })
  .then(() => {
    return mongoose.disconnect()
      .then(() => {
        console.info('Disconnected');
      });
  })
  .catch(err => {
    // console.error(`ERROR: ${err.message}`);
    // console.error(err);
  });