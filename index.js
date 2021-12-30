const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const faker = require('faker');

// Define routes

app.get('/', function (req, res) {
    res.status(200).json({
        message: 'Hello World',
        user_ip: req.ip,
    });
});

app.get('/api/fullname', function (req, res) {
    res.status(200).json({
        fullname: faker.name.findName(),
    });
});
app.get('/api/phone', function (req, res) {
    res.status(200).json({
        phone: faker.phone.phoneNumber(),
    });
});
app.get('/api/email', function (req, res) {
    res.status(200).json({
        email: faker.internet.email(),
    });
});
app.get('/api/address', function (req, res) {
    res.status(200).json({
        address: faker.address.streetAddress(),
    });
});

server.listen(3000, function () {
    console.log('Server listening on port 3000');
});
