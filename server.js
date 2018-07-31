const port = 8000;
const path = require('path')

const express = require('express');
const app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app.listen(port);

app.use(express.static( __dirname + '/public/dist/public'));

// this route will be triggered if any of the routes above did not match
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

require('./server/config/routes')(app);



