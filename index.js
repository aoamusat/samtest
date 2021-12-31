const express = require('express');
const app = express();
const faker = require('faker');
require('dotenv').config();

// Define routes
app.get('/', function (req, res) {
    res.header('content-type', 'text/html');
    res.sendFile(__dirname + '/index.html');
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

const port = process.env.PORT || 3000;

module.exports = { app, port };
