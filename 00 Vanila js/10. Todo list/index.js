let input = document.getElementById("input"); //user enter for todo
let addBtn = document.getElementById("add-btn");
let items = document.getElementById("items"); //div containg alltodo

addBtn.addEventListener("click", function (e) {
  let val = input.value;

  addItem(val);
});

function addItem(text) {
  //<div class="items">
  //    <div class="item">  //create this attach to itemsdic
  //       <span class="text"> //create this attach to itemdiv
  //       btn marked
  //       btn delete

  let div = document.createElement("div");
  div.classList.add("item");
  items.appendChild(div);

  let span = document.createElement("span");
  span.classList.add("text");
  span.innerText = text;
  div.appendChild(span);

  //now add 2 buttons next to itemdiv also

  let markBtn = document.createElement("button");
  markBtn.classList.add("mark-btn");
  markBtn.innerHTML = "✅";
  div.appendChild(markBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = "🗑️";
  div.appendChild(deleteBtn);

  input.value = ""; //reset input
  input.focus(); //vaps focus on it
}

items.addEventListener("click", function (e) {
  let btnClicked = e.target;

  if (btnClicked.classList.contains("mark-btn")) {
    //so mark this task item
    btnClicked.parentElement.firstChild.classList.toggle("completed");
  } else if (btnClicked.classList.contains("delete-btn")) {
    btnClicked.parentElement.remove();
  }
});
//btnClicked.parentElement means go to parent .ie itemdiv usme changes
