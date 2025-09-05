const request = require("supertest");
const app = require("../server"); // export express app from server.js

describe("Job API", () => {
  it("should return jobs array", async () => {
    const res = await request(app).get("/api/jobs");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
