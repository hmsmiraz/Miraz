// script.js
const emojis = ['🌹', '🌷', '💐'];

function createFallingFlower() {
    const emoji = emojis[Math.floor(Math.random() * emojis.length)];
    const flower = document.createElement('div');
    flower.className = 'falling-flower';
    flower.textContent = emoji;
    flower.style.left = Math.random() * window.innerWidth + 'px';
    const duration = Math.random() * 3 + 3;
    flower.style.animationDuration = duration + 's';
    flower.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(flower);

    flower.addEventListener('animationend', () => {
        flower.remove();
    });
}

setInterval(createFallingFlower, 800);
