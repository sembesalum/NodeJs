var http = require('http');

// create server object:
http.createServer(function (req, res){
    res.write('Hello Word!'); //Write a response to the client
    res.end(); // end the response
}).listen(8080); // the server objects listens on port 8080