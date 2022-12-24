var createNote = document.getElementById("createNote");
var showNote = document.getElementById("showNote");
var showOverlay = document.querySelector(".overLay");
var closeIcon = document.querySelector(".closeBox");
var addBtn = document.querySelector(".addBtn");
var noteHeader = document.getElementById("noteHeader");
var noteBody = document.getElementById("noteBody");
var noteTitle = document.querySelector(".noteTitle");
var noteDetails = document.querySelector(".noteDetails")

var notes;


function showNoteBox(){
    showNote.classList.remove("d-none");
    showOverlay.classList.remove("d-none");
};

function closeNoteBox(){
    showNote.classList.add("d-none");
    showOverlay.classList.add("d-none");
};

function closeByEscape(e){
    if(e.key === "Escape" && !createNote.classList.contains("d-none")){
        showNote.classList.add("d-none");
        showOverlay.classList.add("d-none");
    }
}

if(localStorage.getItem("notes") == null ){
    notes = [];
}else{
    notes = JSON.parse(localStorage.getItem("notes"));
}

function addNotes (){
    var note = {
        title : noteTitle.value,
        body : noteDetails.value,
    }
    notes.push(note);
    localStorage.setItem("notes" , JSON.stringify(notes));

    var displayData = document.getElementById("displayData");
    var noteCards = "";

    for(var i=0; i<notes.length; i++){
        noteCards += `
        <div class="col-12">
            <h2 id="noteHeader">${notes[i].title}</h2>
            <p id="noteBody">${notes[i].body}</p>
        </div>
        `;
    }
    displayData.innerHTML = noteCards;
    // noteHeader.textContent= JSON.parse(localStorage.getItem("notes"[title]));
    // noteBody.textContent= JSON.parse(localStorage.getItem("notes"[body]));
    showNote.classList.add("d-none");
    showOverlay.classList.add("d-none");
}

createNote.addEventListener("click", showNoteBox);
closeIcon.addEventListener("click", closeNoteBox);
document.addEventListener("keydown" ,closeByEscape);
addBtn.addEventListener("click", addNotes);