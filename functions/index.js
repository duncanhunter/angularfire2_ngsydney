var functions = require('firebase-functions');
exports.countVotes = functions.database.ref('/votes')
    .onWrite(function (event) {
    return event.data.ref.parent.child("/totalVotes").set(event.data.numChildren());
});
