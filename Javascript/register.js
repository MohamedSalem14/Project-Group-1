let signUpBtn = document.getElementById("signUpBtn");
let users ;

if(localStorage.getItem("allUsers") == null ){
    users = [];
}else{
    users = JSON.parse(localStorage.getItem("allUsers"));
}


function createNewAccount(){
    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPassword = document.getElementById("userPassword").value;

    if(userName !== "" && userEmail !== "" && userPassword !== "" ){
        var user = {
            userName : userName ,
            userEmail : userEmail ,      
            userPassword : userPassword
        };
        users.push(user);

        localStorage.setItem("allUsers" , JSON.stringify(users));
        location.href = "login.html";

} }

console.log(users)


signUpBtn.addEventListener("click", createNewAccount)
