const minirooms = ["miniroom_1.png", "miniroom_2.png", "miniroom_3.png", "miniroom_4.png", "miniroom_5.png", "miniroom_6.png", "miniroom_7.png"]
const minimi = ["minimi_boy.png", "minimi_girl.png"]

const chosenMiniroom = minirooms[Math.floor(Math.random()*minirooms.length)]
const chosenMinimi = minimi[Math.floor(Math.random()*minimi.length)]

document.querySelector(".rightbox__miniroom").style.backgroundImage = `url('img/miniroom/${chosenMiniroom}')`;
document.querySelector(".miniroom__minimi").style.backgroundImage = `url('img/minimi/${chosenMinimi}')`;
document.querySelector(".leftbox__profile").style.backgroundImage = `url('img/minimi/${chosenMinimi}')`;