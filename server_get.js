var express = require("express");
const mongoose = require("mongoose");
var app = express();
var port = 3000;
// Database connection
require('./database')();

require('./routers/router')(app);
// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files from the "public" directory
app.use(express.static(__dirname + '/public'));

// Send the HTML file when accessing the root
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
    console.log("hello i'm listening to port " + port);
})