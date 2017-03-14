const functions = require('firebase-functions');

exports.countVotes = functions.database.ref('/votes')
  .onWrite(event => {
    return event.data.ref.parent.child(`/totalVotes`).set(event.data.numChildren());
  });
