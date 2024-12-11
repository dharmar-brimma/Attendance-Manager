const adminButton = document.querySelector(".btn1");
const employeeButton = document.querySelector(".btn2");

function onclick1(){
    adminButton.addEventListener("click", ()=>{
        window.location.href = "AdminLogin.html";
    });
}
function onclick2(){
    employeeButton.addEventListener("click",()=>{
        window.location.href = "EmployeeLogin.html";
    });
}