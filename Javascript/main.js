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

let UserName = document.getElementById("UserName");
UserName.textContent = localStorage.getItem("userName");

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
    <div class="col-10 noteCards my-3 rounded" id= "notes">
            <div class="d-flex justify-content-between">
                <h3 id="noteHeader" class="ms-3 mt-2 text-uppercase">${notes[i].title}</h3>
            </div>
            <div class="d-flex justify-content-between mx-2">
                <textarea disabled class="noteTextArea" id="noteBody" rows="6">${notes[i].body}</textarea>
            </div>
            <a class="editBtn addBtn btn mb-1 text-center"  onclick= "editNote(${i})">Edit Note</a>
            <a class="addBtn btn mb-1 my-1 text-center" onclick ="saveNote(${i})" id= "savebtn" >Save Note</a>
            <a class="addBtn btn mb-3 text-center" onclick ="deleteNote(${i})">Remove Note</a>
           
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
        <div class="col-10 noteCards my-3 rounded" id= "notes">
            <div class="d-flex justify-content-between">
                <h3 id="noteHeader" class="ms-3 mt-2 text-uppercase">${notes[i].title}</h3>
            </div>
            <div class="d-flex justify-content-between mx-2">
                <textarea disabled class="noteTextArea" id="noteBody" rows="6">${notes[i].body}</textarea>
            </div>
            <a class="editBtn addBtn btn mb-1 text-center"onclick= "editNote(${i})">Edit Note</a>
            <a class="addBtn btn my-1 mb-1text-center"onclick ="saveNote(${i})" id= "savebtn">Save Note</a>
            <a class="addBtn btn mb-3 text-center"onclick ="deleteNote(${i})">Remove Note</a>
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
 var textarea = document.querySelectorAll(".noteTextArea");
 var titleinput = document.querySelectorAll("#noteHeader");
 var fullnote = document.querySelectorAll("#notes");
function editNote(index){ 
textarea[index].removeAttribute("disabled"); 
}
function saveNote(index){ 
     textarea[index].setAttribute("disabled","");
         var item =  JSON.parse(localStorage.getItem('notes'));
      
            item[index].body = textarea[index].value;
             localStorage.setItem("notes" , JSON.stringify(item));
            console.log(item);

}
function deleteNote(index){
    var item =  JSON.parse(localStorage.getItem('notes'));
    // console.log(notes);
    // console.log(fullnote[index]);
    fullnote[index].style.display ='none';
    notes.pop(index);
    localStorage.setItem("notes" , JSON.stringify(notes));
    // console.log(notes);
}
