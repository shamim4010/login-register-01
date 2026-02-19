import { users } from "./register.js";

document.getElementById("btn-login").addEventListener("click", function (){
    const loginUserEmail = document.getElementById("email-lg").value; 
    const loginPass = document.getElementById("password-lg").value;

    for (let key in users){
        if (loginUserEmail === users[key] || loginUserEmail === users[key].userEmail){
            if (loginPass === users[key].userPass){
                alert("Login Success");
                window.location.assign("../public/index.html");
            }
            else {
                alert("password is wrong")
                return
            }
        }
    }
    alert("username or email not exits")

})