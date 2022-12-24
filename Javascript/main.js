var createNote = document.getElementById("createNote");
var showNote = document.getElementById("showNote");
var showOverlay = document.querySelector(".overLay");
var closeIcon = document.querySelector(".closeBox");
var addBtn = document.querySelector(".addBtn");
var noteHeader = document.getElementById("noteHeader");
var noteBody = document.getElementById("noteBody");
var noteTitle = document.querySelector(".noteTitle");
var noteDetails = document.querySelector(".noteDetails")
var displayData = document.getElementById("displayData");
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
var noteCards = "";
for(var i=0; i<notes.length; i++){
    noteCards += `
    <div class="col-12 noteCards py-5 px-5 my-5">
        <h2 id="noteHeader">${notes[i].title}
        <a class="addBtn"><button class="saveBtn btn">Edit Note</button></a>
        </h2>
        <p id="noteBody">${notes[i].body}
        <a class="addBtn"><button class="saveBtn btn ">Remove Note</button></a>
        </p>
    </div>
    `;
}
function addNotes (){
    var note = {
        title : noteTitle.value,
        body : noteDetails.value,
    }
    notes.push(note);
    localStorage.setItem("notes" , JSON.stringify(notes));
    var noteCards = "";
    for(var i=0; i<notes.length; i++){
        noteCards += `
        <div class="col-12 noteCards py-5 px-5 my-5">
            <h2 id="noteHeader">${notes[i].title}
                <a class="addBtn"><button class="saveBtn btn">Edit Note</button></a>
            </h2>
            <p id="noteBody">${notes[i].body}
                <a class="addBtn"><button class="saveBtn btn ">Remove Note</button></a>
            </p>
        </div>
        `;
    }
    displayData.innerHTML = noteCards;
    showNote.classList.add("d-none");
    showOverlay.classList.add("d-none");
    noteTitle.value = "";
    noteDetails.value = "";
}

displayData.innerHTML = noteCards;
createNote.addEventListener("click", showNoteBox);
closeIcon.addEventListener("click", closeNoteBox);
document.addEventListener("keydown" ,closeByEscape);
addBtn.addEventListener("click", addNotes);