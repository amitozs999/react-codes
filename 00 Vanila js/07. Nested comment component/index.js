let commentContainer = document.getElementById("comment-container");

function createInputBox() {
  //<div class="input-box">
  //<input type="text" placeholder="add text here" class="input" />
  //<button class="btn submit">Submit</button>`;

  let div = document.createElement("div");
  div.setAttribute("class", "input-box");

  div.innerHTML += `
    <input type="text" placeholder="add text here" class="input" />
    <button class="btn submit">Submit</button>`;

  return div;
}

function addReply(text) {
  //create new comment card
  let div = document.createElement("div");
  div.setAttribute("class", "all-comment");

  div.innerHTML += `
    <div class="card">
      <span class="text">${text}</span>
      <span id="reply" class="reply">
        Add Reply
      </span>
    </div>`;

  return div;
}

commentContainer.addEventListener("click", function (e) {
  //kisko click in  commentContainer ? reply or submit?
  let replyClicked = e.target.classList.contains("reply");
  let submitClicked = e.target.classList.contains("submit");
  let closestCard = e.target.closest(".all-comment"); //find closest allcoment wala card uske child me add karenge new comment
  //The closest() method raverses the element and its parents (heading toward the document root) until it finds a node that matches the specified CSS selector.

  if (replyClicked) {
    closestCard.appendChild(createInputBox());
    //attach new input box to that closest card id=input-box
  }

  if (submitClicked) {
    //remove input box insead attach card for that now as submitted

    const commentDetails = e.target.closest(".input-box"); //find closedt input

    if (commentDetails.children[0].value) {
      closestCard.appendChild(addReply(commentDetails.children[0].value)); //add new reply card below that parent/closest card
      commentDetails.remove(); //remove input
    }
  }
});
