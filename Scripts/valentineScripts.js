const wordFade = document.querySelector(".wordFade")
const carousel = document.querySelector(".carousel-container")
const explosionContainer = document.getElementById("heart-explosion");


const wordList = ['and here is why',"","thanks for making every day better", "I love you" ]
let step = 0

function handleClick() {
    if (step == 1) {
        carousel.style.display = 'block'
        wordFade.style.display = 'none'
    }
    else if (step == 2) {
        wordFade.style.display = 'block'
        carousel.style.display = 'none'
    }
    else if (step == 4) {
        explodeHearts(30);
    }
    wordFade.classList.remove("wordFade")
    void wordFade.offsetWidth
    wordFade.textContent = wordList[step]
    wordFade.classList.add("wordFade")
    step += 1
}

function explodeHearts(count = 24) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "heart-particle";
    heart.textContent = "💗";

    const angle = Math.random() * Math.PI * 2;
    const distance = 150 + Math.random() * 200;

    const x = Math.cos(angle) * distance + "px";
    const y = Math.sin(angle) * distance + "px";

    heart.style.setProperty("--x", x);
    heart.style.setProperty("--y", y);

    heart.style.left = "50%";
    heart.style.top = "50%";
    heart.style.transform = "translate(-50%, -50%)";

    explosionContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 1600);
  }
}

document.addEventListener('click', handleClick) 
