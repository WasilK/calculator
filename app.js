let a = +prompt("Enter a number", 0);
let op = prompt("Enter an operator", "+");
let b = +prompt("Enter a number", 0);
function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

function operate(a, op, b) {
  if (op === "+") {
    return add(a, b);
  } else {
    return mul(a, b);
  }
}

console.log(operate(a, op, b));
