// app.js

let http = require('http');
let fs = require('fs');

let handleRequest = (request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    // read main html file
    fs.readFile('index.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }

        // end the connection
        response.end();
    });
};

// Start the server on port 3000
http.createServer(handleRequest).listen(3000);
console.log('Node server running on port 3000');