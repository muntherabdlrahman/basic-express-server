'use strict';
const server = require('../src/server');
// I do not have to run it
const supertest = require('supertest');
const request = supertest(server.app);

describe('My validator test',()=>{

     it('handles my internal server errors', async () => {
        const response = await request.get('/person'); // async
        expect(response.status).toEqual(500);
    })

     it('get name from /person', async()=>{
        const response = await request.get('/person?name=name'); // async
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual('object'); // superagent is behind this 
    });
})