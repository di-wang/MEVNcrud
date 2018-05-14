const MongoClient = require('mongodb').MongoClient;
var uri = 'mongodb://admin:admin@ds243345.mlab.com:43345/mencrud';


MongoClient.connect(uri, (err, db) => {  
  if (err) {
    return console.log(err);
  }

  // Do something with db here, like inserting a record
  db.collection('notes').insertOne(
    {
      title: 'Hello MongoDB',
      text: 'Hopefully this works!'
    },
    function (err, res) {
      if (err) {
        db.close();
        return console.log(err);
      }
      // Success
      db.close();
    }
  )
});
