let boxContainer = document.getElementById("box-container");
let box = document.querySelectorAll(".box");
let queue = [];

boxContainer.addEventListener("click", function (e) {
  let index = e.target.dataset.index;

  if (index != undefined) {
    queue.push(index);
    box[index].classList.add("green-color"); //add us box me ye class in claslist
  }

  if (queue.length == 7) {
    //allfilled
    let cnt = 0;
    while (queue.length > 0) {
      //now if   piche se pick index and unfill that one by one till all unfill
      let ind = queue.shift();
      cnt++;
      setTimeout(() => {
        box[ind].classList.remove("green-color"); //1 sec ke baad unfill each
      }, cnt * 1000);
    }
  }
});
