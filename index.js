const express = require("express");
const cors = require("cors");
const { superPro, clear, success } = require("./src/helpers/message.js");

const app = express();
const port = 3000;

// COMMENT: middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Comment:Rutas
app.use(require("./src/route/rutasHome.js"));

//COMMENT: create a server
app.listen(port, () => {
  clear();
  superPro(` ---> Server is running on port ${port}`);
  success("\n Open ctrl+click http://localhost:3000/ ");
});
