const inputdiv = document.getElementById("inputdiv");

inputdiv.addEventListener("input", function (e) {
  //when enter in this input, now focus on next input

  const val = e.target.value;

  if (isNaN(val)) {
    //if npt no make empty
    e.target.value = "";
    return;
  }

  if (val != "") {
    const next = e.target.nextElementSibling; //side wala elem pe jao
    if (next) {
      //if he focus on it
      next.focus();
    }
  }
});

// onkeydown	The user presses a key
// onkeyup	the user releases a key

//if delete press go to prev elem focus there now
inputdiv.addEventListener("keyup", function (e) {
  const key = e.key.toLowerCase();

  if (key == "backspace" || key == "delete") {
    e.target.value = "";
    const prev = e.target.previousElementSibling;
    if (prev) {
      prev.focus();
    }
    return;
  }
});
