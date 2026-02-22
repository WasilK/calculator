let ops = document.querySelectorAll(".op");
let nums = document.querySelectorAll(".num");

ops.forEach((op) =>
  op.addEventListener("click", (e) => {
    let o = e.target.textContent;
    operator = o;
    console.log(operator);
    if (operator == "=") {
      let res = add(firstNum, secondNum);
      firstNum = res;
      secondNum = 0;
      operator = null;
      justCalculated = true;
      console.log(res);
    }
  }),
);

let operator = null;
let prevOperator = null;
let firstNum = 0;
let secondNum = 0;
let justCalculated = false;

function add(a, b) {
  return a + b;
}

function takeNum1(a) {
  firstNum = firstNum * 10 + a;
}
function takeNum2(a) {
  secondNum = secondNum * 10 + a;
}
nums.forEach((num) =>
  num.addEventListener("click", (e) => {
    if (justCalculated) {
      firstNum = 0;
      justCalculated = false;
    }
    if (operator == null) {
      let a = e.target.textContent;
      takeNum1(+a);
      console.log(firstNum);
    } else {
      let b = e.target.textContent;
      takeNum2(+b);
      console.log(secondNum);
    }
  }),
);
