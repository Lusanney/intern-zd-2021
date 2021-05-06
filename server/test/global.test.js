const { StatusCodes } = require("http-status-codes");
const supertest = require("supertest");
const app = require("../app");

const request = supertest(app);

describe("Testing global app", () => {
    it("[Error] Unknown route, Should return an HTML page (React will handle this)", async () => {
        const URL = '/api/v2/';
        expect.hasAssertions();

        const response = await request.get(URL);

        expect(response.status).toBe(StatusCodes.OK);
    })
})