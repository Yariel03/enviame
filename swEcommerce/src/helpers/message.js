require("colors");

const success = (message) => {
  console.log(message.green);
};

const info = (message) => {
  console.log(message.blue);
};

const warning = (message) => {
  console.log(message.orange);
};

const error = (message) => {
  console.log(message.red);
};

const superPro = (message) => {
  console.log("======================================".rainbow);

  console.log(message.gray);
  console.log("======================================".rainbow);
};
const clear = () => {
  console.clear();
};

module.exports = {
  success,
  info,
  warning,
  error,
  superPro,
  clear,
};
