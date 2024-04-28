const request = require('supertest');
const { app, server } = require('./index'); // Import both app and server

afterAll((done) => {
  server.close(done); // Close the server after all tests are done
});

describe('GET /', () => {
  it('responds with Hello World!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toEqual('Hello World!');
    expect(response.status).toEqual(200);
  });
});
