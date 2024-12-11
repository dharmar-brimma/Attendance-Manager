// let adminNames = ['Dharmar','Rohit','Pollard'];

// let name = document.querySelector(".name");
// let inputName = name.value;

// for(let i = 0;i<adminNames.length;i++){
//     if(adminNames[i] !== inputName){
        
//     }
// }

const button = document.querySelector(".btn");
let nameInput = document.getElementById("name");
let passwordInput = document.getElementById("password");

button.addEventListener("click",()=>{
    let name = nameInput.value.trim();
    let password = passwordInput.value.trim();
    if(name === "rohit" && password === "rohit@2024"){
        window.location.href = "/EmployeePage/EmployeePage.html"
    }
    else{
        alert("Invalid Credentials!");
    }
});