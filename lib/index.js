/*
* Module dependencies.
*/

var connect = require('connect'),
   phonegap = require('connect-phonegap'),
   app = connect();

/*
* Create Express app and server.
*/

app.use(phonegap());

var port = process.env.PORT || 3000;
app.listen(port);
