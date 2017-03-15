var functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.countVotes = functions.database.ref('/votes')
  .onWrite(function (event) {
    
    if (event.data.previous.exists()) {
      return;
    }

    var results = {
      total: 0,
      v4: 0,
      v2: 0
    };

    var votes = event.data._newData;
    Object.keys(votes).map(function(key) {
      console.log('key1', key);
      results.total++;
      votes[key] === 'v4' ? results.v4++ : results.v2++;
    });

    return admin.database().ref('/voteCount').set(results);
  });
