'use strict';
const server = require('../src/server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(server.app);

//add the name of the module that I am testing 
describe('my API Server', ()=> {

    // add scenarios & test cases 
    it('handles not found request', async () => {
        // add test
        const response = await request.get('/not found'); // async
        expect(response.status).toEqual(404);
    });

    it('handles not found request', async () => {
        // add test
        const response = await request.post('/person'); // async
        expect(response.status).toEqual(404);
    });




});