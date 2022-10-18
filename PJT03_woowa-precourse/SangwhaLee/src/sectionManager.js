import { savedLines, saveLines, lines } from "./lineManger.js"
import { savedStations } from "./stationManager.js";

const sectionSelect = document.getElementById("section-select");
const addStationSector = document.getElementById("add-station-sector");
const selectedLineTable = document.getElementById("selected-line-table");
const sectionEditForm = document.getElementById("section-edit-form");
const newCourseSelect = document.querySelector("#section-edit-form #add-station-sector");
const newCourseOrder = document.querySelector("#section-edit-form input:nth-child(2)");
const editorTitle = document.querySelector("#section-editor h2");
const sectionEditor = document.getElementById("section-editor");
let nowSectionName = "";

function putChoiceStations(station){
    const choice = document.createElement("option");
    choice.value = station;
    choice.innerText = station;
    addStationSector.appendChild(choice);
}

function writeSector(){
    
}

function searchLine(line){
    const parsedLines = JSON.parse(savedLines);
    for(let i=0;i<parsedLines.length;i++){
        if(parsedLines[i].name === line){
            return i;
        }
    }
}

function addCourse(event){
    event.preventDefault();
    const parsedLines = JSON.parse(savedLines);
    const targetNum = searchLine(nowSectionName);
    parsedLines[targetNum].section.splice(parseInt(newCourseOrder.value), 0, newCourseSelect.value);
    console.log(parsedLines[targetNum]);
    // console.log(newCourseOrder);
    // console.log(newCourseSelect);
    lines.splice(targetNum, 1, parsedLines[targetNum]);
    console.log(lines);
    saveLines();
    writeSectionLine(lines[targetNum]);
}

function makeSectionTableHead(){
    const tr = document.createElement("tr");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");
    th1.innerText = "순서"
    th2.innerText = "이름"
    th3.innerText = "설정"
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);
    selectedLineTable.appendChild(tr);
}


function writeSectionLine(line){
    selectedLineTable.innerText = "";
    makeSectionTableHead();
    for(let i=0;i<line.section.length;i++){
        // console.log(line.section);
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        td1.innerText = i;
        td2.innerText = line.section[i];
        const button = document.createElement("button");
        button.innerText = "노선에서 제거";
        td3.appendChild(button);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        selectedLineTable.appendChild(tr);
    }
}

function createSector(event){
    sectionEditor.classList.remove("hidden");
    const parsedLines = JSON.parse(savedLines);
    const targetSector = event.target.innerText;
    editorTitle.innerText = targetSector + ' 관리';
    nowSectionName = targetSector;
    const targetNum = searchLine(targetSector);
    // console.log(targetLine);
    writeSectionLine(parsedLines[targetNum]);
}

if(savedLines !== null){
    const parsedLines = JSON.parse(savedLines);
    for(let i=0; i< parsedLines.length;i++){
        const button = document.createElement("button");
        button.innerText = parsedLines[i].name;
        button.addEventListener ("click", createSector);
        sectionSelect.appendChild(button);
    }
}

if(savedStations !== null) {
    const parsedStations = JSON.parse(savedStations);
    parsedStations.forEach(putChoiceStations);
}

sectionEditForm.addEventListener("submit", addCourse);