const functions = require('firebase-functions');
var admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.countVotes = functions.database.ref('/votes')
  .onWrite(event => {

    // if (event.data.previous.exists()) {
    //   return;
    // }

    const results = { total: 0, v4: 0, v2: 0 };
    const votes = event.data._newData;
    Object.keys(votes).map(key => {
      console.log('key1', key);
      results.total++;
      votes[key] === 'v4' ? results.v4++ : results.v2++;
    });

    return event.data.ref.parent.child('/voteCount').set(results);
  });
