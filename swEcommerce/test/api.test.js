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

describe("vendedores", () => {
  it("Agregar vendedores", (done) => {
    const data = {
      name: "vendedor 2",
      short_description: "Perez",
      email: "luis2@nomail.com",
      password: "123456",
      wharehouse: "Calle falsa 123",
    };
    request(app)
      .post("/admin/newseller")
      .send(data)
      .set("Accept", "application/json")
      .expect(200, done);
  });

  it("listar vendedor por id", (done) => {
    request(app)
      .get("/admin/seller/1")
      .set("Accept", "application/json")
      .expect(200, done);
  });
});
