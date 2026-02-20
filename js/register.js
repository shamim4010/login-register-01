let users = {};

document.getElementById("btn-register").addEventListener("click", function (){
    const userN = document.getElementById("user-name-rg").value;
    const userE = document.getElementById("email-rg").value;
    const userP = document.getElementById("password-rg").value;
    const confirmPassword = document.getElementById("confirm-password-rg").value;
    let userData = JSON.parse(localStorage.getItem('users')) || {};
    userE.trim();
    userE.trim();

    if (!userN || !userE || !userP || !confirmPassword){
        preventDefault();
        alert("fild all")
    }

    for (let key in userData){
        if (userN === userData[key] || userE === userData[key].userEmail){
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
    localStorage.setItem('users', JSON.stringify(users));
    alert("Registration Success");
});

