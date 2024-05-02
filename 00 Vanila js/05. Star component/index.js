let container = document.getElementById("star-container");
let star = document.querySelectorAll(".star");
let filledidx = 0;

container.addEventListener("click", function (e) {
  let currClickedidx = e.target.dataset.index; //data-index ki value check?

  for (let i = 0; i < filledidx; i++) {
    //if 2 filled remove filled wali class from that star class list
    star[i].classList.remove("star-filled");
  }

  for (let i = 0; i < currClickedidx; i++) {
    //add star filled class in classlist of idx of clicked star tak
    star[i].classList.add("star-filled");
  }

  document.getElementById(
    "count"
  ).innerText = `Rating Count: ${currClickedidx}`;

  filledidx = currClickedidx;
});

//jesi hi over all stars se remove classfilled
//(hover clicked/us elem ke uper ka uska index)  pe  add that class to jitne clicked
container.addEventListener("mouseover", function (e) {
  let currClickedidx = e.target.dataset.index;

  for (let i = 0; i < 4; i++) {
    star[i].classList.remove("star-filled");
  }

  for (let i = 0; i < currClickedidx; i++) {
    star[i].classList.add("star-filled");
  }
});

//jesi hi leave(without click) all stars se remove classfilled
// vaps add that class to jitne filled the
container.addEventListener("mouseleave", function (e) {
  for (let i = 0; i < 4; i++) {
    star[i].classList.remove("star-filled");
  }

  for (let i = 0; i < filledidx; i++) {
    star[i].classList.add("star-filled");
  }
});
