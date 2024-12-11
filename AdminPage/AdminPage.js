const employeeData = [
    { id: "E001", name: "Iron Man", loginToday: true },
    { id: "E002", name: "Captain America", loginToday: false },
    { id: "E003", name: "Thor", loginToday: true },
    { id: "E004", name: "Hulk", loginToday: false },
    { id: "E005", name: "Black Widow", loginToday: true },
    { id: "E006", name: "Hawkeye", loginToday: false },
    { id: "E007", name: "Spider-Man", loginToday: true },
    { id: "E008", name: "Doctor Strange", loginToday: false },
    { id: "E009", name: "Black Panther", loginToday: true },
    { id: "E010", name: "Scarlet Witch", loginToday: false },
    { id: "E011", name: "Vision", loginToday: true },
    { id: "E012", name: "Ant-Man", loginToday: false },
    { id: "E013", name: "Wasp", loginToday: true },
    { id: "E014", name: "Star-Lord", loginToday: false },
    { id: "E015", name: "Gamora", loginToday: true },
    { id: "E016", name: "Rocket Raccoon", loginToday: false },
    { id: "E017", name: "Groot", loginToday: true },
    { id: "E018", name: "Drax", loginToday: false },
    { id: "E019", name: "Loki", loginToday: true },
    { id: "E020", name: "Falcon", loginToday: false }
];
const todayDate = document.querySelector("#date");
const date = new Date();
let datep = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
todayDate.innerHTML = datep+"/"+month+"/"+year;

const searchBar = document.querySelector("#search");
const tableBody = document.querySelector("#employee tbody");

function rendertable(data){
    tableBody.innerHTML = "";
    data.forEach(employee => {
        const row = document.createElement("tr");

        const idCell = document.createElement("td");
        idCell.textContent = employee.id;
        row.appendChild(idCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = employee.name;
        row.appendChild(nameCell);

        const loginTodayCell = document.createElement("td");
        const statusDot = document.createElement("span");
        statusDot.style.height = "10px";
        statusDot.style.width = "10px";
        statusDot.style.borderRadius = "50%";
        statusDot.style.backgroundColor = employee.loginToday? "green":"red";
        statusDot.style.display = "inline-block";
        loginTodayCell.appendChild(statusDot);
        row.appendChild(loginTodayCell);

        const attendanceCell = document.createElement("td");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        attendanceCell.appendChild(checkbox);
        row.appendChild(attendanceCell);

        tableBody.appendChild(row);
    });
}

rendertable(employeeData);
searchBar.addEventListener("input",() =>{
    const query = searchBar.value.toLocaleLowerCase();

    const filteredData = employeeData.filter(employee => 
        employee.name.toLocaleLowerCase().includes(query) || employee.id.toLocaleLowerCase().includes(query)
    );

    rendertable(filteredData);
})