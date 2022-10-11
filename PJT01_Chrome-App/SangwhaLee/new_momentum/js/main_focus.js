const todayFocus = document.getElementById("focus-today");
const focusInput = todayFocus.querySelector("#focus-today input");
const MainFocus = document.querySelector("#FocusToday");
const TodayCheckBox = document.getElementById("todaycheckbox");
const TodayCase = document.getElementById("todaycase");

const HIDDEN= "hidden";
const FOCUS_KEY = "focustoday";
const TEXT_LINE = "line-through";
const BOX_VISIBILE = "boxchecked"

function onFocusSubmit(event){
  console.log(event);
  event.preventDefault();
  todayFocus.classList.add (HIDDEN);
  TodayCheckBox.classList.remove(HIDDEN);
  const mainfocus = focusInput.value;
  localStorage.setItem(FOCUS_KEY, mainfocus);
  paintFocus(mainfocus);
}

function paintFocus(mainfocus){
  MainFocus.classList.remove(HIDDEN);
  const TodayWord = document.getElementById("Today");
  TodayWord.classList.remove(HIDDEN);
  MainFocus.innerText = mainfocus;
}

function showBox(event){
  TodayCheckBox.classList.remove(HIDDEN);
}

function hideBox(event){
  TodayCheckBox.classList.add(HIDDEN);
}

function paintLine(event){
  MainFocus.classList.toggle(TEXT_LINE);
  const is_checked = TodayCheckBox.checked;
  localStorage.setItem(BOX_VISIBILE, is_checked);

}

function is_checked(){
  return TodayCheckBox.checked;
}

const savedFocus = localStorage.getItem(FOCUS_KEY);

if(savedFocus === null){
  todayFocus.addEventListener("submit", onFocusSubmit);
}
else{
  todayFocus.classList.add (HIDDEN);
  paintFocus(savedFocus);
}

const nowCheck = localStorage.getItem(BOX_VISIBILE);

TodayCheckBox.addEventListener("click", paintLine);

if(nowCheck === "true"){
  TodayCheckBox.classList.remove("hidden");
  TodayCheckBox.checked = true;
  MainFocus.classList.add(TEXT_LINE);
}
else if(savedFocus!==null){
  TodayCheckBox.classList.remove("hidden");
}

