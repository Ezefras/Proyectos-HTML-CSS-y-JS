const button1 = document.getElementById("button1")
const diceImages = [
    "images/imagenes dados.png",
    "images/imagenes dados (2).png",
    "images/imagenes dados (3).png",
    "images/imagenes dados (4).png",
    "images/imagenes dados (5).png",
    "images/imagenes dados (6).png"
];

const diceImg = document.getElementById("diceImg")
function diceChanger() {
    for (let i = 20; i > 0; i--) {
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * diceImages.length);
            diceImg.src = diceImages[randomIndex];
        }, (10 - i) * 150); // 300ms entre cada cambio
    }
}

// Listener afuera de la función
button1.addEventListener("click", diceChanger);