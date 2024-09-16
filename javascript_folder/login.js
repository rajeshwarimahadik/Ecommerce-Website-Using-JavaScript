let form = document.querySelector("form");
let userName = document.querySelectorAll("input")[0];
let password = document.querySelectorAll("input")[1];
let euser = document.querySelectorAll("span")[0];
let epass = document.querySelectorAll("span")[1];
let esub = document.querySelectorAll("span")[1];
let dataFromStorage = JSON.parse(localStorage.getItem("data"));
console.log(dataFromStorage);

form.addEventListener("submit" , (e) =>{
    euser.innerHTML = "";
    epass.innerHTML = "";
    esub.innerHTML = "";

    let oneUser = dataFromStorage.find((e) => {
        if(e.smobile== userName.value && e.spassword == password.value ){
            return e ;
        }
     });


    if(userName.value == "" && password.value == ""){
        euser.innerHTML = "*type the username here";
        epass.innerHTML = "*type the password here";
        e.preventDefault();//prevent the form from submitted.
    }else if(userName.value == ""){
        euser.innerHTML = "*type the username";
        e.preventDefault();
    }
    else if(password.value == ""){
        epass.innerHTML = "*type the password";
        e.preventDefault();
    }
    else if(oneUser){
     alert("Welcome to the page");
    localStorage.setItem("oneUser", JSON.stringify(oneUser));
    }
    else{
        esub.innerHTML = "*password is not matching";
        e.preventDefault();
    }
})