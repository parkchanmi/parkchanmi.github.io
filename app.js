const mainDiv = document.querySelector(".main");

const images = ["bg1.jpg", "bg2.jpg", "bg3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `image/${chosenImage}`;

//mainDiv.appendChild(bgImage);
mainDiv.style.backgroundImage = `url(./image/${chosenImage})`;