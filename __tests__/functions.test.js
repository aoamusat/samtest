const {
    generateToken,
    getName,
    isAuthenticated,
    isAdmin,
} = require('../utils/helpers');

describe('Test Subtract', function () {
    it('Should be truth', function () {
        expect(5 - 9).toEqual(-4);
    });

    it('should generate a string', function () {
        const name = getName();
        expect(typeof name).toBe('string');
    });

    it('Should be truth', function () {
        expect(2 + 3).toEqual(5);
    });

    it('should generate a string', function () {
        const token = generateToken();
        expect(typeof token).toBe('string');
    });

    it('Should be true', () => {
        expect(isAuthenticated()).toBeTruthy();
    });

    const ob = isAdmin();

    it('Should be an object', () => {
        expect(typeof ob).toEqual('object');
    });

    it('Should be an object', () => {
        expect(ob.hasOwnProperty('name')).toBeTruthy();
    });
});
