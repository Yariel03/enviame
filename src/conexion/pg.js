const { Pool } = require("pg");
const { superPro, error } = require("./../helpers/message.js");

const pool = new Pool({
  host: "pg",
  user: "postgres",
  password: "postgres",
  database: "enviamedb",
  port: "5432",
});

pool
  .connect()
  .then(superPro(` ---> Conexión FULL a Base de Datos PG `))
  .catch((err) =>
    error("Error en la Conexion de la Base de Datos " + err.stack)
  );

module.exports = {
  pool,
};
