document.getElementById("btn-rg").addEventListener('click', function (){
    window.location.assign('../public/login-register.html');
})

document.getElementById("btn-lg").addEventListener('click', function (){
     localStorage.setItem('autoClick', 'yes');
     window.location.assign('../public/login-register.html')

})