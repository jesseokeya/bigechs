const express = require("express");
const gzippo = require('gzippo');
var cors = require('cors')
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(gzippo.staticGzip("" + __dirname + "/src"));

app.listen(port, function() {
    console.log("server listening on port " + port);
});
