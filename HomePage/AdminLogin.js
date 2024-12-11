const button = document.querySelector(".btn");

let nameInput = document.getElementById("name");
let passwordInput = document.getElementById("password");

button.addEventListener("click",()=>{
        let name = nameInput.value.trim();
        let password = passwordInput.value.trim();

        if(name=="Dharmar" && password=="Dharmar@brimma2024"){
                window.location.href = "/AdminPage/AdminPage.html";
        }
        else{
                alert("Invalid Credentials");
        }
});