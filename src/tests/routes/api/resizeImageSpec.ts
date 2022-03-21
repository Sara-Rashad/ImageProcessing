import { response } from "express";
import supertest from "supertest";
import app from '../../../routes/index';

const request=supertest(app);
describe("Test image processing endpoint response",()=>{

it("Test main route ",async()=>{
await request.get('/').expect(200); 
});

});
