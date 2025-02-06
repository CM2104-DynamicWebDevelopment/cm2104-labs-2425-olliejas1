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

// Retrieve an access token
spotifyApi.clientCredentialsGrant().then( 
    function (data) {
    console.log('The access token expires in ' + data.body['expires_in']);
    console.log('The access token is ' + data.body['access_token']);
    // Save the access token so that it's used in future calls
    spotifyApi.setAccessToken(data.body['access_token']); 
    },
    function (err) {
    console.log(
    'Something went wrong when retrieving an access token',
    err.message 
    );
    }
   )

   async function getTopTracks(artist, res) {
    spotifyApi.getArtistTopTracks(artist,
   'GB')
    .then(function (data) {
    console.log(data.body);
    }, function (err) {
    console.log('Something went wrong!', err);
    });
   }
   
   