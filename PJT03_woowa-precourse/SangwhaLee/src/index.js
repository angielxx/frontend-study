const stationManagerButton = document.getElementById("station-manager-button");
const lineManagerButton = document.getElementById("line-manager-button");
const sectionManagerButton = document.getElementById("section-manager-button");
const mapPrintButton = document.getElementById("map-print-manager-button");
const lineManager = document.getElementById("line-manager");
const stationManager = document.getElementById("station-manager");
const sectionManager = document.getElementById("section-manager");
const mapListManager = document.getElementById("section-list");

function stationManage(event){
    lineManager.classList.add("hidden");    
    stationManager.classList.remove("hidden");
    sectionManager.classList.add("hidden");
    mapListManager.classList.add("hidden");
}

function lineManage(event){
    stationManager.classList.add("hidden");
    lineManager.classList.remove("hidden");
    sectionManager.classList.add("hidden");
    mapListManager.classList.add("hidden");
}

function sectionManage(event){
    sectionManager.classList.remove("hidden");
    stationManager.classList.add("hidden");
    lineManager.classList.add("hidden");
    mapListManager.classList.add("hidden");
}

function mapListManage(event){
    sectionManager.classList.add("hidden");
    stationManager.classList.add("hidden");
    lineManager.classList.add("hidden");
    mapListManager.classList.remove("hidden");
}

stationManagerButton.addEventListener("click", stationManage);
lineManagerButton.addEventListener("click", lineManage);
sectionManagerButton.addEventListener("click", sectionManage);
mapPrintButton.addEventListener("click", mapListManage);

export { stationManage, lineManage };