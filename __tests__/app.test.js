import request from "supertest";
import app from "../index.js";

describe("GET /", () => {
  it("should return app message", async () => {
    const res = await request(app).get("/");

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello from Node.js Docker App!");
  });
});