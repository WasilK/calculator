function add(a, b) {
  return a + b;
}

function mul(a, b) {
  return a * b;
}

function sub(a, b) {
  return b - a;
}

function div(a, b) {
  return b / a;
}

function operate(a, op, b) {
  if (op === "+") {
    return add(a, b);
  } else if (op === "*") {
    return mul(a, b);
  } else if (op === "-") {
    return sub(a, b);
  } else if (op === "/") {
    return div(a, b);
  }
}

function call() {
  let a = +prompt("Enter a number", 0);
  while (true) {
    let op = prompt("Enter operator", "+");
    if (op == "=") {
      break;
    }
    let b = +prompt("Enter a number", 0);
    a = operate(a, op, b);
    alert(a);
  }
  alert(a);
}
call();
