const request = require('supertest');
const { app } = require('../index');

describe('Test application endpoints', () => {
    it('should return 200', () => {
        return request(app)
            .get('/api/fullname')
            .expect('Content-Type', /json/)
            .then((response) => {
                const body = response.body;
                expect(response.statusCode).toBe(200);
                expect(body.hasOwnProperty('fullname')).toBe(true);
            });
    });
});
