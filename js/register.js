export let users = {};

document.getElementById("btn-register").addEventListener("click", function (){
    const userN = document.getElementById("user-name-rg").value;
    const userE = document.getElementById("email-rg").value;
    const userP = document.getElementById("password-rg").value;
    const confirmPassword = document.getElementById("confirm-password-rg").value;

    for (let key in users){
        if (userN === users[key] || userE === users[key].userEmail){
            alert("username or email alrady exits")
            return
        }
        else {
            break
        }
    }
    if ( userP !== confirmPassword){
        alert("password not match")
        return
    }
    users[userN] = {
            userName: userN,
            userEmail: userE,
            userPass: userP
        };
    alert("Registration Success");
});

