const request = require("supertest");           
const app = require("../server/server");         

// Groups related tests together.
describe("GET /foods", () => {

  // Test 1: the route should respond with status 200 (OK).
  test("responds with status code 200", async () => {
    const response = await request(app).get("/foods");
    expect(response.status).toBe(200);
  });

  // Test 2: the route should return all five food items.
  test("returns five food items", async () => {
    const response = await request(app).get("/foods");
    expect(response.body.length).toBe(5);
  });

  // Test 3: each food item should have an id, a name, and a price.
  test("each food item has id, name, and price", async () => {
    const response = await request(app).get("/foods");
    const firstFood = response.body[0];         
    expect(firstFood).toHaveProperty("id");
    expect(firstFood).toHaveProperty("name");
    expect(firstFood).toHaveProperty("price");
  });
});

// A second group of tests for routes that do not exist.
describe("Unknown routes", () => {

  // Test 4: asking for a route that doesn't exist should give a 404.
  test("responds with status code 404", async () => {
    const response = await request(app).get("/route-that-does-not-exist");
    expect(response.status).toBe(404);
  });
});