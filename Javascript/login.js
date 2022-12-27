let signInBtn = document.getElementById("signIn");
let allUsers = JSON.parse(localStorage.getItem("allUsers"));


function login(){
    let userName = document.getElementById("userName").value;
    let userPassword = document.getElementById("userPassword").value;

    for(let i = 0; i < allUsers.length; i++){
        if(allUsers[i].userName === userName && allUsers[i].userPassword === userPassword){
            localStorage.setItem("userName" , userName);
            location.href = "notes.html";
        }
    }
}

signInBtn.addEventListener("click", login);