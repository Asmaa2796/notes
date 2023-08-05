const notesContainer = document.querySelector(".notes-container");
const createNote = document.querySelector(".create-note");
let notes = document.querySelectorAll(".input-box");

function getNote() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}
getNote();

// save note to localstorage
function saveNote() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

// create note
createNote.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

// delete note
notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveNote();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach(note => {
      note.onkeyup = function () {
        saveNote();
      };
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "ENTER") {
    document.insertLineBreak();
    e.preventDefault();
  }
});
