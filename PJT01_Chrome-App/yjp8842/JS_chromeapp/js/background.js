const images = ["img.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImage}`;

// document.body.appendChild(bgImage);
document.getElementById("background").style.backgroundImage = `url('img/${chosenImage}')`;
document.getElementById("backgorund").style.cssText = "background-size: 100%;"