'use strict';

const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
//    title: { type: String, index: true, required: true },
    title: { type: String, index: true },
    content: { type: String, index: true },
    created: { type: Date, default: Date.now }
});

notesSchema.set('toObject', {
    transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
    }
});


// note that all instance methods and virtual properties on our
// schema must be defined *before* we make the call to `.model`.
// can combine the two lines below into:
// module.exports = mongoose.model('Note', noteSchema);


const Note = mongoose.model('Note', notesSchema);

module.exports = { Note };
