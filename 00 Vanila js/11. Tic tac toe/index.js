const gameContainer = document.getElementById("game-container");
const reset = document.getElementById("reset");
let hash = {};
let chance = true; //x ki bari
let allFilled = 0; //kitne cell filled

gameContainer.addEventListener("click", function (e) {
  //fetch cell check its data index
  if (e.target.dataset.index) {
    //1-3  fetch 1 and 3 from this
    const [row, col] = e.target.dataset.index
      .split("-")
      .map((val) => parseInt(val));

    if (!hash[e.target.dataset.index]) {
      //this index not filled in hash tabhi chal chalo
      if (chance) {
        hash[e.target.dataset.index] = "X"; //is index pe x chala
        e.target.classList.add("cell-withX"); ///cell me add X
      } else {
        hash[e.target.dataset.index] = "O";
        e.target.classList.add("cell-withO");
      }

      chance = !chance; //no  next time ulte wale ki chance
      allFilled++;

      let result = checkWin(); //koi jita kya ya all filled all
      if (allFilled == 9 || result.includes("Win")) {
        document.getElementById("won").textContent = result; //draw ya win add in span textwon
        gameContainer.style.pointerEvents = "none"; //no addition now
      }
    }
  }
});

reset.addEventListener("click", function (e) {
  const cells = document.querySelectorAll(".cell");

  cells.forEach((val) => {
    if (val.classList.contains("cell-withX")) {
      val.classList.remove("cell-withX");
    } else {
      val.classList.remove("cell-withO");
    }
  });

  hash = {};
  allFilled = 0;
  chance = true;
  document.getElementById("won").textContent = "";
  gameContainer.style.pointerEvents = "auto";
});

function checkWin() {
  //check if any row has all same elem
  for (let i = 0; i < 3; i++) {
    //pic rowidx
    let set = new Set();
    let player = "";
    for (let j = 0; j < 3; j++) {
      //check all coresponding col
      let key = `${i}-${j}`; //00 01 02
      set.add(hash[key]);
      player = hash[key];
    }

    if (set.size == 1 && player) {
      //means 3ino bar same elme added in set so size 1
      return `Player ${player} Win`;
    }
  }

  //check if any col has all same elem

  for (let j = 0; j < 3; j++) {
    //pic colidx
    let set = new Set();
    let player = "";
    for (let i = 0; i < 3; i++) {
      //00 10 20
      let key = `${i}-${j}`;
      set.add(hash[key]);
      player = hash[key];
    }

    if (set.size == 1 && player) {
      return `Player ${player} Win`;
    }
  }

  // diagonal
  let i = 0,
    j = 0;
  let set = new Set();
  let player = "";
  while (i < 3 && j < 3) {
    //00  se 2,2 tak
    let key = `${i}-${j}`;
    set.add(hash[key]);
    player = hash[key];
    i++;
    j++;
  }

  if (set.size == 1 && player) {
    return `Player ${player} Win`;
  }

  // anti-daiagonal
  (i = 0), (j = 2); //02  se 2,0 tak
  set.clear();
  while (i < 3 && j >= 0) {
    let key = `${i}-${j}`;
    set.add(hash[key]);
    player = hash[key];
    i++;
    j--;
  }

  if (set.size == 1 && player) {
    return `Player ${player} Win`;
  }

  return "Match draw"; //else
}
