let increment = document.getElementById("increment"); //increment directly by 1-10 value

let add = document.getElementById("add"); //+2
let subtract = document.getElementById("subtract"); //-2

let reset = document.getElementById("reset"); //counter 0 now

let incrementNumber = 1; //default increment(add/sub) by this number

increment.addEventListener("change", function (e) {
  incrementNumber = parseInt(e.target.value);
});

add.addEventListener("click", function (e) {
  let currValue = document.getElementById("number");
  let total = parseInt(currValue.innerText) + incrementNumber;

  currValue.innerText = total;
});

subtract.addEventListener("click", function (e) {
  //need to check negative jese hi jae set number to 0
  let currValue = document.getElementById("number");
  let total = parseInt(currValue.innerText) - incrementNumber;
  if (total < 0) {
    total = 0;
  }

  currValue.innerText = total;
});

reset.addEventListener("click", function (e) {
  let currValue = document.getElementById("number");
  currValue.innerText = 0;
});
