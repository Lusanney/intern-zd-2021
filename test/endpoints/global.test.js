const { StatusCodes } = require("http-status-codes");
const supertest = require("supertest");
const app = require("../../app");

const request = supertest(app);

describe("Testing global app", () => {
    it("[Error] Unknown route, Should return NOT FOUND", () => {
        const URL = '/api/v2/';
        expect.hasAssertions();

        const response = await request.get(URL);

        expect(response.status).toBe(StatusCodes.NOT_FOUND);
        expect(response.body.status).toBe("fail");
        expect(response.body.message).toBe(`Can't find ${URL} on this server!`)
    })
})