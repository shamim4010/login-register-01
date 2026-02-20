document.getElementById("btn-login").addEventListener("click", function (){
    let userData = JSON.parse(localStorage.getItem('users')) || {};
    const loginUserEmail = document.getElementById("email-lg").value; 
    const loginPass = document.getElementById("password-lg").value;

    for (let key in userData){
        if (loginUserEmail === userData[key] || loginUserEmail === userData[key].userEmail){
            if (loginPass === userData[key].userPass){
                alert("Login Success");
                window.location.assign("../public/home.html");
            }
            else {
                alert("password is wrong")
                return
            }
        }
    }
    alert("username or email not exits")
    return

})