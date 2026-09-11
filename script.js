

let user_name=document.querySelector("#user_name");
let email=document.querySelector("#email")
let password=document.querySelector("#password")
let form=document.querySelector("form");
form.addEventListener("submit",function(val){
    val.preventDefault();
    document.querySelector("#u_error").textContent="";
    document.querySelector("#e_error").textContent="";
    document.querySelector("#p_error").textContent="";
    document.querySelector("#comform_password").textContent="";
    document.querySelector("#success_msg").textContent="";



    
    const user_name_regex = /^[a-zA-Z0-9_]{3,20}$/;
    const email_regix=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const pass_regix=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
   let u_check=user_name_regex.test(user_name.value);
   let email_check=email_regix.test(email.value);
   let check_pass=pass_regix.test(password.value);
   console.log(u_check);
   console.log(email_check);
   console.log(check_pass);
   if(!u_check){
  document.querySelector("#u_error").textContent="user name is incorrect ";
document.querySelector("#u_error").style.display="initial";


   }
   if(!email_check){
    document.querySelector("#e_error").textContent=" email is incorrect";
    
document.querySelector("#e_error").style.display="initial";
   }
   if(!check_pass){
    document.querySelector("#p_error").textContent="password is incorrect";
    document.querySelector("#p_error").style.display="initial";
   }
  let c_password = document.querySelector("#c_password");
    if(c_password.value !== password.value){
        document.querySelector("#comform_password").textContent="password not match";
        document.querySelector("#comform_password").style.display="initial";
    }
   if(u_check && email_check &&check_pass && c_password.value===password.value){
    {
    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);
   }
    document.querySelector("#success_msg").textContent="Signup successfull";
    document.querySelector("#success_msg").style.display="initial";
    form.reset();

   }
   
  
});

let log_form = document.querySelector("#log_form");

if (log_form) {
    log_form.addEventListener("submit", function(val) {
        val.preventDefault();
        document.querySelector("#l_error").textContent = " ";

        let saved_email = localStorage.getItem("email");
        let saved_password = localStorage.getItem("password");
        console.log(saved_email);
        console.log(saved_password);

        if (
            login_email.value === saved_email &&
            login_password.value === saved_password

        ) {

            localStorage.removeItem("email");
        localStorage.removeItem("password");
        log_form.reset();
        window.location.href = "index.html";


            
            

        } else {
            document.querySelector("#l_error").textContent =
                "Invalid Email or Password";
            document.querySelector("#l_error").style.display = "initial";
        }
        
    });
}

let eye = document.querySelector("#eye");
let login_password=document.querySelector("#login_password")
eye.addEventListener("click",function(){
    if(login_password.type === "password"){
        login_password.type = "text"
        
    }
    else{
        login_password.type="password";

        
    }
    
})
