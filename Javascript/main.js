let createNote = document.getElementById("createNote");
let showNote = document.getElementById("showNote");
let showOverlay = document.querySelector(".overLay");
let closeIcon = document.querySelector(".closeBox");
let addBtn = document.querySelector(".addBtn");
let noteHeader = document.getElementById("noteHeader");
let noteBody = document.getElementById("noteBody");
let noteTitle = document.querySelector(".noteTitle");
let noteDetails = document.querySelector(".noteDetails");
let displayData = document.getElementById("displayData");
let notes;

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
   
    if(notes[i].UserName === UserName.textContent){

        noteCards += `
        <div class="col-10 noteCards my-3 rounded" id= "notes">
                <div class="d-flex justify-content-between">
                    <h3 id="noteHeader" class="ms-3 mt-2 text-uppercase">${[i+1]}- ${notes[i].title}</h3>
                    <div class="dropdownIcon dropdown mx-3 mt-2" onclick= "showHiddenNote(${i})"><i class="fas fa-caret-down"></i></div>
                    <div class="upIcon dropdown mx-3 mt-2 d-none" onclick= "hideNote(${i})"><i class="fas fa-caret-up"></i></i></div>
                </div>
                <div class="hiddenNoteBody mx-2 d-none">
                    <div>
                    <textarea disabled class="noteTextArea" id="noteBody" rows="6">${notes[i].body}</textarea>
                    </div>
                    <div class="d-flex ">
                    <a class="editBtn addBtn btn mb-1 text-center"  onclick= "editNote(${i})">Edit Note</a>
                    <a class="addBtn btn mb-1 my-1 text-center" onclick ="saveNote(${i})" id= "savebtn" >Save Note</a>
                    <a class="addBtn btn mb- text-center" onclick ="deleteNote(${i})">Remove Note</a>
                    </div>
                </div>
        </div>
        `;   
    }

} 

function addNotes (){
    var note = {
        title : noteTitle.value,
        body : noteDetails.value,
        UserName: UserName.textContent
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
            <a class="addBtn btn my-1 mb-1 text-center"onclick ="saveNote(${i})" id= "savebtn">Save Note</a>
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

let dropdownIcon = document.querySelectorAll(".dropdownIcon")
let hiddenNoteBody = document.querySelectorAll(".hiddenNoteBody")
let upIcon = document.querySelectorAll(".upIcon")


function showHiddenNote(index){
    dropdownIcon[index].classList.add("d-none");
    hiddenNoteBody[index].classList.remove("d-none");
    upIcon[index].classList.remove("d-none");
}

function hideNote(index){
    hiddenNoteBody[index].classList.add("d-none");
    upIcon[index].classList.add("d-none");
    dropdownIcon[index].classList.remove("d-none");
}
