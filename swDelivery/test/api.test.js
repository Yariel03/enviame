const request = require("supertest");
const app = require("../index");

describe("HOME", () => {
  it("ruta raiz funcional", (done) => {
    request(app).get("/").set("Accept", "application/json").expect(200, done);
  });

  it("ruta Version", (done) => {
    request(app).get("/").set("Accept", "application/json").expect(200, done);
  });
});

describe("tracking", () => {
  it("Insertar trackings", (done) => {
    request(app)
      .post("/tracking")
      .set("Accept", "application/json")
      .expect(200, done);
  });

  it("listar Trackings", (done) => {
    request(app)
      .get("/trackings")
      .set("Accept", "application/json")
      .expect(200, done);
  });
});
