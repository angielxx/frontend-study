import { savedLines } from "./lineManger.js"
import { savedStations } from "./stationManager.js";

const SectionList = document.getElementById("section-list");
const SectionListButton = document.getElementById("map-print-manager-button");

SectionListButton.addEventListener("click", showMapList)

function showMapList(event){
  event.preventDefault();
  const parsedlines = JSON.parse(savedLines);
  for(let i=0;i<parsedlines.length;i++){
    showMapListDetail(i, parsedlines[i]);
    console.log(parsedlines[i]);
  }
}

function showMapListDetail(targetNum, line){
  const h2 = document.createElement("h2");
  h2.innerText = line.name;
  const ul = document.createElement("ul");
  for(let i=0; i<line.section.length;i++){
    const li = document.createElement("li");
    li.innerText = line.section[i];
    ul.appendChild(li);
  }
  SectionList.appendChild(h2);
  SectionList.appendChild(ul);
}