var express = require("express")

var app = express();
var docs_handler = express.static(__dirname);
app.use(docs_handler);
//  start the server
app.listen(8002);
