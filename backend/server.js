var express = require('express');
const dataconnect = require('./Db/connect');
var cors = require('cors')
const getData = require('./route/getdata')


dataconnect();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/login/data',require('./route/route'))
app.use('/sigup/data',require('./route/signuproute'))
app.use('/user',getData)
// app.use('/welcome').require('./route/getdata');

const hostname = 'localhost';
const port = 4000;


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});