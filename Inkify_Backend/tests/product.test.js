
const request = require('supertest');
const app = require('../server');

describe('GET /api/products', () => {
    it('should return all products', async () => {
        const res = await request(app).get('/api/products');
        expect(res.statusCode).toEqual(200);
    });
});
