const add = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  console.log("a : ", a);
  console.log("b : ", b);
  return a - b;
}

const product = (a, b) => {
  return a * b;
}

module.exports = {add, subtract, product}