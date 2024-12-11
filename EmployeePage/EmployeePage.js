const date = document.querySelector("datePicker");
const button = document.querySelector(".btn");
// const myChart = document.querySelector("#myChart");
src = "https://cdn.jsdelivr.net/npm/chart.js";
let xValues = ["Present","Absent"];
let yValues = [79,21];
let barColors = [
    "#00AAA8",
    "E8C3B9"
];
button.addEventListener("click",()=>{
    const myChart = new Chart("chart",{
    type : "pie",
    data:{
        labels: xValues,
        datasets:[
            {
                backgroundColor:barColors,
                data: yValues
            }
        ]
    },
    options:{
        title:{
            display:true,
            text:"Month P/A List"
        }
    }
});
});