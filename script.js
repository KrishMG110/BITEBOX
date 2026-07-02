
 function login(){
    let email = document.getElementById('email').value;
    let password= document.getElementById('password').value;;
    let error=document.getElementById('error');

if(email==="Admin@1234" && password==="1234"){
    localStorage.setItem("isLoggedIn","true");
    localStorage.setItem("user",email);

    window.location.href="index.html";

}

else {
 error.innerHTML=("invalid email or password");
}
}
function toggle_password(){
    let password_Input=document.getElementById("password");
    console.log(password_Input.type)
    if(password_Input.type==="password"){
        password_Input.type="text";

    }
    else{
        password_Input.type="password";
    }
}
