const loginBtn=document.getElementById('login-btn');
// console.log(loginBtn);
loginBtn.addEventListener('click',function(){
    // Select email and password field > take email and password value
    const email=document.querySelector('#email');
    const password=document.querySelector('#password');
    // console.log(email,password);
    const emailValue=email.value;
    const passwordValue=password.value;
    // console.log(emailValue,passwordValue);
    // condition/logic
     if(emailValue=='admin@gmail.com' && passwordValue=='admin'){
        // console.log("You are the real user");
        window.location.href="dashboard.html";
     }else{
        // console.log("You are a hacker");
        alert('You are a hacker');
     }
});


function myFunction() {
   var x = document.querySelector('.myInput');
   if (x.type === "password") {
     x.type = "text";
   } else {
     x.type = "password";
   }
 }