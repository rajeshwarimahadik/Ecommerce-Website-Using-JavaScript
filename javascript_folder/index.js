let firstName = document.querySelectorAll("input")[0];
let lastName = document.querySelectorAll("input")[1];
let  email  =  document.querySelectorAll("input")[2];
let mobile = document.querySelectorAll("input")[3];
let password = document.querySelectorAll("input")[4];
let confirmPassword = document.querySelectorAll("input")[5];
let efirst = document.querySelectorAll("span")[0];
let elast = document.querySelectorAll("span")[1];
let eemail = document.querySelectorAll("span")[2];
let emobile = document.querySelectorAll("span")[3];
let epass = document.querySelectorAll("span")[4];
let ecpass = document.querySelectorAll("span")[5];
let form = document.querySelector("form");
let storage = [];
let dataFromStorage = JSON.parse(localStorage.getItem("data"));
console.log(dataFromStorage);

if(dataFromStorage){
   storage = dataFromStorage;
}

form.addEventListener("submit", (e) => {
    let regx=/^[a-zA-Z]{2,15}$/;//regularexpression(regx)
    let regx1 = /^[6-9][0-9]{9}$/;
    let regx2 =/^[a-zA-Z0-9]{8,15}$/;
    let flag = true;

     //first name validation
 if(firstName.value == ""){
    efirst.innerHTML = "First name required <br>";
    e.preventDefault();
    flag = false ;
 }
 else if(regx.test(firstName.value)){
    efirst.innerHTML=""
 }
 else {
    efirst.innerHTML = "invalid first name <br>"
    e.preventDefault();
    flag = false;
 }

 //last name validationation
 if(lastName.value == ""){
    elast.innerHTML = "last name is required <br>";
    e.preventDefault();
    flag = false ;
 }else if(regx.test(lastName.value)){
    elast.innerHTML = "";
 }else{
    elast.innerHTML = "invalid last name <br>";
    e.preventDefault();
    flag = false;
 }

 //email validation
 if(email.value == ""){
    eemail.innerHTML = "email required <br>";
    e.preventDefault();
    flag = false ;
 }
 else{
    eemail.innerHTML = "";
 }

 //mobile validation
 if(mobile.value == ""){
    emobile.innerHTML = "mobile number required <br>";
    e.preventDefault();
    flag = false ;
 }else if(regx1.test(mobile.value)){
    emobile.innerHTML = "";
 }else {
    emobile.innerHTML = "invalid mobile number";
    e.preventDefault();
    flag = false ;

// password validation
 }
 if(password.value == ""){
    epass.innerHTML = "password is required <br>";
    e.preventDefault();
    flag = false ; 
 }else if(regx2.test(password.value)){
    epass.innerHTML = "";
 }else {
    epass.innerHTML = "invalid password";
    e.preventDefault();
    flag = false ; 
 }

 //confirm password validation
 if(password.value == confirmPassword.value){
    ecpass.innerHTML = "";
 }
//  else if(regx2.test(password.value)){
//     epass.innerHTML = "";
//     e.preventDefault();
//     flag = false ; 
//  }
else {
    ecpass.innerHTML = "password should be same as below password";
    e.preventDefault();
    flag = false ; 
 }
 if(flag){
   let data = {
      sfirstName: firstName.value,
      slastName : lastName.value,
      semail: email.value,
      smobile: mobile.value,
      spassword: password.value,
      cartItems: null ,
   };
  storage.push(data)
  localStorage.setItem("data" , JSON.stringify(storage));
 }
});