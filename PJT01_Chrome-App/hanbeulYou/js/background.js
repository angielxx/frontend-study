const images = ["bg_1.png", "bg_2.png"]

const chosenImage = images[Math.floor(Math.random()*images.length)]

document.getElementById("background").style.backgroundImage = `url('img/background/${chosenImage}')`;