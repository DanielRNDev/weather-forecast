var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');
var axios = require('axios');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(cors());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/get-locations', function(req, res) {
  const location = req.body['location']
  const API_URL = `https://www.metaweather.com/api/location/search/?query=${location}`;

  axios.get(API_URL)
  .then(response => {
    res.end(JSON.stringify(response.data));
  })
  .catch(error => {
    res.end(JSON.stringify(error));
  });
})

app.post('/get-weather', function(req, res) {
  const woeid = req.body['woeid']
  const API_URL = `https://www.metaweather.com/api/location/${woeid}`;

  axios.get(API_URL)
  .then(response => {
    res.end(JSON.stringify(response.data));
  })
  .catch(error => {
    res.end(JSON.stringify(error));
  });
})

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
