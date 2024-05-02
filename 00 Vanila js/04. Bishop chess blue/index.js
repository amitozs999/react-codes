let table = document.getElementById("table");

//build table 8*8
for (let i = 0; i < 8; i++) {
  //i=r0wno

  let tr = document.createElement("tr");

  let white = i % 2 == 0 ? true : false; //i =even white se start

  for (let j = 0; j < 8; j++) {
    //fill j=colidx all 8 col
    // col
    let td = document.createElement("td");
    if (white) {
      td.setAttribute("class", "box white");
    } else {
      td.setAttribute("class", "box black");
    }
    white = !white; //reverse now for next cell

    td.setAttribute("data-index", `${i}-${j}`); //set index attribute for each cell
    tr.appendChild(td);
  }
  table.appendChild(tr);
}

table.addEventListener("mouseover", function (e) {
  //cellidx=i-j
  let temp = e.target.dataset.index.split("-").map((val) => parseInt(val));
  let row = temp[0]; //i
  let col = temp[1]; //j
  let str = `${row}-${col}`;

  let hash = {}; //now contains all diagonalidx on all 4 side blue
  hash[str] = true;

  hash = findTopLeft(row, col, hash);
  hash = findTopRight(row, col, hash);
  hash = findBottomLeft(row, col, hash);
  hash = findBottomRight(row, col, hash);

  let cells = document.querySelectorAll("td"); //fetch all cells

  for (let i = 0; i < cells.length; i++) {
    //first remove all blue
    cells[i].classList.remove("blue");
  }

  for (let i = 0; i < cells.length; i++) {
    //mark hash well cellidx wale blue
    var x = cells[i].closest("tr").rowIndex;
    var y = cells[i].cellIndex;
    let str = `${x}-${y}`;

    if (hash[str]) {
      cells[i].classList.add("blue");
    }
  }
});

table.addEventListener("mouseleave", function (e) {
  const cells = document.querySelectorAll("td");

  for (let i = 0; i < cells.length; i++) {
    //remove blue class from all td
    cells[i].classList.remove("blue");
  }
});

function findTopLeft(row, col, hash) {
  row--;
  col--;
  while (row >= 0 && col >= 0) {
    let key = `${row}-${col}`;
    hash[key] = true;
    row--;
    col--;
  }

  return hash;
}

function findTopRight(row, col, hash) {
  row--;
  col++;
  while (row >= 0 && col < 8) {
    let key = `${row}-${col}`;
    hash[key] = true;
    row--;
    col++;
  }

  return hash;
}

function findBottomLeft(row, col, hash) {
  row++;
  col--;
  while (row < 8 && col >= 0) {
    let key = `${row}-${col}`;
    hash[key] = true;
    row++;
    col--;
  }

  return hash;
}

function findBottomRight(row, col, hash) {
  row++;
  col++;
  while (row < 8 && col < 8) {
    let key = `${row}-${col}`;
    hash[key] = true;
    row++;
    col++;
  }

  return hash;
}
