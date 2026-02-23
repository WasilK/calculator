let ops = document.querySelectorAll(".op");
let nums = document.querySelectorAll(".num");
let display = document.querySelector("p");

let operator = null;
let firstNum = "";
let secondNum = "";
let justCalculated = false;

/* ---------------- DISPLAY ---------------- */

function updateDisplay() {
  if (operator === null) {
    display.textContent = firstNum || "0";
  } else {
    display.textContent = secondNum || firstNum || "0";
  }
}

/* ---------------- OPERATIONS ---------------- */

function operate(a, op, b) {
  a = parseFloat(a);
  b = parseFloat(b);

  let result;

  switch (op) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b === 0) return "Error";
      result = a / b;
      break;
    default:
      return a;
  }

  // Fix floating precision
  result = Math.round(result * 1000000000) / 1000000000;

  return result.toString();
}

/* ---------------- NUMBER CLICK ---------------- */

nums.forEach((num) =>
  num.addEventListener("click", (e) => {
    let value = e.target.textContent;
    if (justCalculated) {
      firstNum = "";
      secondNum = "";
      justCalculated = false;
    }

    // if (justCalculated && operator != null) {
    //   secondNum = "";
    //   operator = null;
    //   justCalculated = false;
    // }

    if (operator === null) {
      if (value === "." && firstNum.includes(".")) return;
      if (value === "." && firstNum === "") {
        firstNum = "0.";
      } else {
        firstNum += value;
      }
    } else {
      if (value === "." && secondNum.includes(".")) return;
      if (value === "." && secondNum === "") {
        secondNum = "0.";
      } else {
        secondNum += value;
      }
    }

    updateDisplay();
  }),
);

/* ---------------- OPERATOR CLICK ---------------- */

ops.forEach((opBtn) =>
  opBtn.addEventListener("click", (e) => {
    let value = e.target.textContent;
    if (justCalculated) {
      justCalculated = false;
    }

    if (value === "=") {
      if (operator !== null && secondNum !== "") {
        firstNum = operate(firstNum, operator, secondNum);
        secondNum = "";
        operator = null;
        justCalculated = true;
      }
    } else {
      // If operator exists but no second number → allow operator switching
      if (operator !== null && secondNum === "") {
        operator = value;
        return;
      }

      // Chaining
      if (operator !== null && secondNum !== "") {
        firstNum = operate(firstNum, operator, secondNum);
        secondNum = "";
      }

      operator = value;
    }

    updateDisplay();
  }),
);

let ac = document.querySelector(".ac");
function resetCalculator() {
  firstNum = "";
  secondNum = "";
  operator = null;
  justCalculated = false;
}

let remove = document.querySelectorAll(".remove");

remove.forEach((r) =>
  r.addEventListener("click", (e) => {
    let val = e.target.textContent;
    if (val === "AC") {
      resetCalculator();
    } else {
      handleDelete();
    }
    updateDisplay();
  }),
);

function handleDelete() {
  if (justCalculated) return; // Don't delete result

  if (operator === null) {
    firstNum = firstNum.slice(0, -1);
  } else {
    if (secondNum !== "") {
      secondNum = secondNum.slice(0, -1);
    } else {
      // If secondNum empty → delete operator
      operator = null;
    }
  }
}
