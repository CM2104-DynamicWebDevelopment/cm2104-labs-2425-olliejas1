var express = require('express');
var app = express();
var SpotifyWebApi = require('spotify-web-api-node');
 app.use(express.static('public'))
 app.get('/'
, function(req, res){
 res.send("Hello world! by express");
});
app.listen(8080);

var spotifyApi = new SpotifyWebApi({
    clientId:'905d0f226d394cecaf8e3cb9448fc31e',
    clientSecret:'c02863f85a2a4dffa311f4a30ab2b3b5'
})