const http = require('http');
const { app, port } = require('./index');
const server = http.createServer(app);

server.listen(port, function () {
    console.log('Server listening on port:' + port);
});
