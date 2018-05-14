// init setting
console.log("hello test")
const express = require('express');
const app = express();
const bodyParser= require('body-parser')
const MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({extended: true}))


var db
// replace the uri string with your connection string.
const uri = 'mongodb://admin:admin@ds243345.mlab.com:43345/mencrud';

MongoClient.connect(uri, (err, client) => {
  if (err) return console.log(err)
  db = client // whatever your database name is
 
})


app.listen(3000, () =>{
  console.log('listening on 3000')
})
// handling request and post
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)

    console.log('saved to database')
    res.redirect('/')
  })
})









/*
// listening to web request
app.listen(3000, function(){
    console.log("listening")
})

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.post('/quotes', (req, res) => {
    console.log('Hellooooooooooooooooo!')
  })
  

*/