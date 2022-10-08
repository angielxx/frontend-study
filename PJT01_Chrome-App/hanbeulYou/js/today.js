const today = document.getElementById('today')
let randomToday = Math.floor(Math.random()*10)

function getClock(){
    // new Date()로 현재 시간 가져오기
    const date = new Date();
    randomToday += Math.floor(date.getSeconds()*Math.random());
    today.innerText = `🧡 Today : ${priceToString(randomToday)} 🧡`;
}

// 3자리씩 ',' 넣기
function priceToString(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

getClock()
// 실행할 함수, 시간(ms)
setInterval(getClock, 5000);