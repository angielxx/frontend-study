import { savedStations } from "./stationManager.js";

const lineForm = document.getElementById("selectLine");
const lineInput = document.getElementById("line-name-input");
const topLineSelect = document.getElementById("top-line");
const bottomLineSelect = document.getElementById("bottom-line");
const lineTable = document.getElementById("lineTable");

const LINE_KEY = "lines";

let lines = [];

function saveLines(){
    localStorage.setItem(LINE_KEY,JSON.stringify(lines));
}

function putChoiceTopBottom(station){
    const choice = document.createElement("option");
    const choice2 = document.createElement("option");
    choice.value = station;
    choice.innerText = station;
    choice2.value = station;
    choice2.innerText = station;
    topLineSelect.appendChild(choice);
    bottomLineSelect.appendChild(choice2);
}

function writeLine(line){
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    td1.innerText = line.name;
    td2.innerText = line.section[0];
    td3.innerText = line.section[line.section.length - 1];
    const button = document.createElement("button");
    button.innerText = "삭제";
    button.addEventListener("click", deleteLine);
    td4.appendChild(button);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    lineTable.appendChild(tr);
}

function deleteLine(event){
    const td = event.target.parentElement;
    const tr = td.parentElement;
    const rowIndex = tr.rowIndex;
    lines.splice(rowIndex-1,1);
    saveLines();
    tr.remove();
}

function createLine(event){
    if(lineInput.value === ""){
        alert("노선의 이름을 입력하세요.");
        return;
    }
    else if(topLineSelect.value === bottomLineSelect.value){
        alert("상행 종점과 하행 종점은 서로 다른 역으로 골라주세요.");
        return;
    }
    event.preventDefault();
    const lineName = lineInput.value;
    lineInput.value = "";
    let section = [topLineSelect.value, bottomLineSelect.value];
    const line = {
        name:lineName,
        section: section,
    };
    lines.push(line);
    writeLine(line);
    saveLines();
}

const savedLines = localStorage.getItem(LINE_KEY);

if(savedStations !== null){
    const parsedStations = JSON.parse(savedStations);
    parsedStations.forEach(putChoiceTopBottom);
}

if(savedLines !== null){
    const parsedLines = JSON.parse(savedLines);
    lines = parsedLines;
    parsedLines.forEach(writeLine);
}

lineForm.addEventListener("submit", createLine);

export { savedLines, saveLines, lines };