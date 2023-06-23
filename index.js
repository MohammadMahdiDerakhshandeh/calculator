buttonNumber = document.getElementsByClassName("num");
buttonOperation = document.getElementsByClassName("operation");
input = document.getElementById("display");
equal = document.getElementById("equal");
let AC = document.getElementById("allClear");
let DE = document.getElementById("delChar");
let dot = document.getElementsByClassName("dot")[0];
let memory, lastOperation;

for (const btn of buttonNumber) {
  btn.addEventListener("click", calc);
}
function calc(e) {
  if (input.value.length > 15) {
    return;
  } else {
    if (
      e.srcElement.childNodes[0].data === "." &&
      !input.value.includes(".") &&
      input.value != ""
    ) {
      input.value += ".";
    } else if (e.srcElement.childNodes[0].data != ".") {
      inputNum = e.srcElement.childNodes[0].data;
      input.value += inputNum;
    }
  }
}

for (const btnOperation of buttonOperation) {
  btnOperation.addEventListener("click", useOpration);
}
function useOpration(e, key) {
  if (input.value != "") {
    if (e.srcElement != undefined) {
      lastOperation = e.srcElement.childNodes[0].data;
      memory = Number(input.value);
      input.value = "";
    } else {
      lastOperation = key;
      memory = Number(input.value);
      input.value = "";
    }
  }
}

equal.addEventListener("click", result);
function result() {
  if (memory != undefined) {
    if (lastOperation === "+") {
      res = Number(input.value) + memory;
      input.value = res;
      return res;
    } else if (lastOperation === "-") {
      res = memory - Number(input.value);
      input.value = res;
    } else if (lastOperation === "*") {
      res = Number(input.value) * memory;
      input.value = res;
    } else if (lastOperation === "/") {
      res = memory / Number(input.value);
      input.value = res;
    }
    lastOperation = "";
  }
}

AC.addEventListener("click", allClear);
function allClear() {
  input.value = "";
  memory = undefined;
  lastOperation = undefined;
}

DE.addEventListener("click", deleteChar);
function deleteChar() {
  arr = Array.from(input.value);
  arr.pop();
  newArr = arr.join("");
  input.value = newArr;
}
document.addEventListener("keypress", checkKey);

function checkKey(e) {
  switch (e.key) {
    case "1":
      input.value += "1";
      break;
    case "2":
      input.value += "2";
      break;
    case "3":
      input.value += "3";
      break;
    case "4":
      input.value += "4";
      break;
    case "5":
      input.value += "5";
      break;
    case "6":
      input.value += "6";
      break;
    case "7":
      input.value += "7";
      break;
    case "8":
      input.value += "8";
      break;
    case "9":
      input.value += "9";
      break;
    case "0":
      input.value += "0";
      break;
    case "Enter":
      result();
      break;
    case "+":
      useOpration("", "+");
      break;
    case "-":
      useOpration("", "-");
      break;
    case "*":
      useOpration("", "*");
      break;
    case "/":
      useOpration("", "/");
      break;
  }
}
