const faker = require('faker');
const crypto = require('crypto');

const getName = () => {
    return faker.name.findName();
};

const generateToken = () => {
    return crypto.randomBytes(128).toString('hex').slice(0, 32);
};

function isAuthenticated() {
    return true;
}

const isAdmin = function () {
    var haveAccess = false;
    let name = 'admin';
    const pi = Math.PI;

    return {
        access: haveAccess,
        name: name,
        pi: pi,
    };
};

module.exports = {
    getName,
    generateToken,
    isAdmin,
    isAuthenticated,
};
