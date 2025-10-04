const request = require("supertest");
const app = require("../src/app");

describe("User API", () => {
  it("should return 200 for GET /api/users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toBe(200);
  });
});
