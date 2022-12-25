var createNote = document.getElementById("createNote");
var showNote = document.getElementById("showNote");
var showOverlay = document.querySelector(".overLay");
var closeIcon = document.querySelector(".closeBox");
var addBtn = document.querySelector(".addBtn");
var noteHeader = document.getElementById("noteHeader");
var noteBody = document.getElementById("noteBody");
var noteTitle = document.querySelector(".noteTitle");
var noteDetails = document.querySelector(".noteDetails");
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
    <div class="col-10 noteCards my-3 rounded">
            <div class="d-flex justify-content-between">
                <h3 id="noteHeader" class="ms-3 mt-2 text-uppercase">${notes[i].title}</h3>
            </div>
            <div class="d-flex justify-content-between mx-2">
                <textarea disabled class="noteTextArea" id="noteBody" rows="6">${notes[i].body}</textarea>
            </div>
            <a class="editBtn addBtn btn mb-1 text-center ">Edit Note</a>
            <a class="addBtn btn my-1 text-center">Remove Note</a>
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
        <div class="col-10 noteCards my-3 rounded">
            <div class="d-flex justify-content-between">
                <h3 id="noteHeader" class="ms-3 mt-2 text-uppercase">${notes[i].title}</h3>
            </div>
            <div class="d-flex justify-content-between mx-2">
                <textarea disabled class="noteTextArea" id="noteBody" rows="6">${notes[i].body}</textarea>
            </div>
            <a class="editBtn addBtn btn mb-1 text-center ">Edit Note</a>
            <a class="addBtn btn my-1 text-center">Remove Note</a>
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

var editBtn = document.querySelectorAll(".editBtn");
var textArea = document.querySelectorAll(".noteTextArea");


for (var j=0; j<editBtn.length; j++){
    editBtn[j].addEventListener("click", editNote)
}

function editNote(){
    for (var a=0; a<textArea.length; a++){
    textArea[a].removeAttribute("disabled");
} }