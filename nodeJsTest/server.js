const express = require('express');
const app = express();

app.listen(8080, function() {
  console.log('listening on 8080');
});

app.get('/', function(req, respon) {
  respon.send('home 페이지');
});

app.get('/pet', function(req, respon) {
  respon.send('펫 페이지');
});

app.get('/test', function(req, respon) {
  respon.send('test 페이지');
});