const stationForm = document.getElementById("add-station-form");
const stationInput = stationForm.querySelector("#add-station-form input");
const stationTable = document.getElementById("stationTable");

const STATION_KEY = "stations";

let stations = [];

function saveStations(){
    localStorage.setItem(STATION_KEY, JSON.stringify(stations));
}

function writeStation(station){
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const button = document.createElement("button");
    button.innerText = "삭제";
    button.addEventListener("click", deleteStation);
    td1.innerText = station;
    td2.appendChild(button);
    tr.appendChild(td1);
    tr.appendChild(td2);
    stationTable.appendChild(tr);
}

function deleteStation(event){
    const td = event.target.parentElement;
    const tr = td.parentElement;
    const rowIndex = tr.rowIndex;
    stations.splice(rowIndex-1,1);
    saveStations();
    tr.remove();
}

function createStation(event){
    event.preventDefault();
    const station = stationInput.value;
    stationInput.value = "";
    stations.push(station);
    saveStations()
    writeStation(station);
}

stationForm.addEventListener("submit", createStation);
const savedStations = localStorage.getItem(STATION_KEY);

if(savedStations !== null){
    const parsedStations = JSON.parse(savedStations);
    stations = parsedStations;
    parsedStations.forEach(writeStation);
}

export { createStation, savedStations }