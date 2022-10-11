const feelingForm = document.getElementById("feeling-form");
const feelingInput = document.querySelector("#feeling-form input");
const feelingList = document.getElementById("feelings__list");

const FEELING_KEY = 'feeling';

let feelings = [];
let feelingIdx;

function saveFeelings(){
    localStorage.setItem(FEELING_KEY, JSON.stringify(feelings));
}

function downFeeling(event){
    const li = event.target.parentElement;
    feelingIdx = feelings.findIndex(item => item.id == li.id);
    if(feelings[feelingIdx].value > 0){
        feelings[feelingIdx].value -= 10;
    }
    const feelingValue = li.querySelector('progress');
    feelingValue.value = feelings[feelingIdx].value;
    saveFeelings();
}

function upFeeling(event){
    const li = event.target.parentElement;
    feelingIdx = feelings.findIndex(item => item.id == li.id);
    console.log(li);
    if(feelings[feelingIdx].value < 100){
        feelings[feelingIdx].value += 10;
    }
    const feelingValue = li.querySelector('progress');
    feelingValue.value = feelings[feelingIdx].value;
    saveFeelings();
}

function deleteFeeling(event){
    const li = event.target.parentElement;
    feelings = feelings.filter(item => item.id != li.id);
    li.remove();
    saveFeelings();
}

function postFeelings(newFeeling){
    const li = document.createElement("li");
    li.id = newFeeling.id;
    const span = document.createElement("div");
    const downButton = document.createElement("button");
    const upButton = document.createElement("button");
    const delButton = document.createElement("button");
    const feelingValue = document.createElement("progress");
    li.appendChild(span);
    li.appendChild(downButton);
    li.appendChild(feelingValue);
    li.appendChild(upButton);
    li.appendChild(delButton);
    feelingList.appendChild(li);
    span.innerText = newFeeling.text;
    span.style.width = "70px";
    downButton.innerText = "🔻";
    downButton.style.marginBottom = "10px";
    feelingValue.value = newFeeling.value;
    feelingValue.max = 100;
    feelingValue.style.width = "120px";
    upButton.innerText = "🔺";
    delButton.innerText = "❌";
    downButton.addEventListener("click", downFeeling);
    upButton.addEventListener("click", upFeeling);
    delButton.addEventListener("click", deleteFeeling);
}

function feelingSubmit(event){
    if(feelings.length < 3){
    event.preventDefault();
    const newFeeling = feelingInput.value;
    feelingInput.value = "";
    const newFeelingObj = {
        text: newFeeling,
        value: 50,
        id: Date.now(),
    };
    feelings.push(newFeelingObj);
    postFeelings(newFeelingObj);
    saveFeelings();
    } else{
        alert('기분은 3개를 초과할 수 없습니다.')
    }
}

function updateProgress(){

}

feelingForm.addEventListener("submit", feelingSubmit);

const savedFeelings = localStorage.getItem(FEELING_KEY);

if(savedFeelings !== null){
    const parsedFeelings = JSON.parse(savedFeelings);
    feelings = parsedFeelings;
    parsedFeelings.forEach(postFeelings);
}