'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const { MONGODB_URI } = require('../config');

const Note = require('../models/note');

// Originally Find/Search for notes using Note.find
// Modified for mini challenge, improved using the $or Operator, 
// update the query to search both the title and the `content fields.

// mongoose.connect(MONGODB_URI)
//     .then(() => {
//         const searchTerm = 'most';

//         let re;
//         if (searchTerm) {
//             re = new RegExp(searchTerm, 'i');
//         }

//         return Note.find({ $or: [{ title: re }, { content: re }] })
//             .select('title created')
//             .sort('created')
//             .then(results => {
//                 console.log('asdf');

//                 console.log(results);
//             })
//             .catch(console.error);


//     })
//     .then(() => {
//         return mongoose.disconnect()
//             .then(() => {
//                 console.info('Disconnected');
//             });
//     })
//     .catch(err => {
//         console.error(`ERROR: ${err.message}`);
//         console.error(err);
//     });

//   // Find note by id using Note.findById
//   mongoose.connect(MONGODB_URI)
//   .then(() => {
//       const id = '000000000000000000000005';

//     return Note.findById(id)
//       .select('title created')
//       .sort('created')
//       .then(results => {
//         console.log('asdf');

//         console.log(results);
//       })
//       .catch(console.error);


//   })
//   .then(() => {
//     return mongoose.disconnect()
//       .then(() => {
//         console.info('Disconnected');
//       });
//   })
//   .catch(err => {
//     console.error(`ERROR: ${err.message}`);
//     console.error(err);
//   });

   // Create a new note using Note.create
//   mongoose.connect(MONGODB_URI)
//    .then(() => {
//        const newNote = {
//            title: 'The Lion in the Living Room',
//            content: 'Lorem ipsum dolor sit amet'
//        }

//      return Note.create(newNote)
//        .then(results => {
//          console.log(results);
//        })
//        .catch(console.error);


//    })
//    .then(() => {
//      return mongoose.disconnect()
//        .then(() => {
//          console.info('Disconnected');
//        });
//    })
//    .catch(err => {
//      console.error(`ERROR: ${err.message}`);
//      console.error(err);
//    });

// Update a note by id using Note.findByIdAndUpdate
// mongoose.connect(MONGODB_URI)
// .then(() => {
//     const id = '000000000000000000000005';
//     const newNote = {
//         title: 'Big Cats in the Living Room',
//         content: 'Lorem ipsum dolor sit amet'
//     }

//   return Note.findByIdAndUpdate({_id: id}, newNote)
//     .then(results => {
//       console.log(results);
//     })
//     .catch(console.error);


// })
// .then(() => {
//   return mongoose.disconnect()
//     .then(() => {
//       console.info('Disconnected');
//     });
// })
// .catch(err => {
//   console.error(`ERROR: ${err.message}`);
//   console.error(err);
// });

//Delete a note by id using Note.findByIdAndRemove
// mongoose.connect(MONGODB_URI)
// .then(() => {
//     const id = '000000000000000000000006';

//   return Note.findByIdAndRemove({_id: id})
//     .then(results => {
//       console.log(results);
//     })
//     .catch(console.error);


// })
// .then(() => {
//   return mongoose.disconnect()
//     .then(() => {
//       console.info('Disconnected');
//     });
// })
// .catch(err => {
//   console.error(`ERROR: ${err.message}`);
//   console.error(err);
// });