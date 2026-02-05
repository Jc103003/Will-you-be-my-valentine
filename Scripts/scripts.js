const heart = document.getElementById("loveHeart");
const text = document.getElementById("heartText");
const explosion = document.getElementById("pageExplosion");

const MAX_CLICKS = 5;
const NEXT_PAGE = "html/valentine.html";
let clicks = 0;
let locked = false;

function restartAnim(cls) {
  heart.classList.remove(cls);
  void heart.getBoundingClientRect();
  heart.classList.add(cls);
}

function handleHeartClick() {
  if (locked) return;

  clicks++;

  restartAnim("pop");

  if (clicks >= 3 && clicks < MAX_CLICKS) {
    setTimeout(() => restartAnim("wiggle"), 40);
  }

  const remaining = MAX_CLICKS - clicks;

  if (remaining > 0) {
    console.log(remaining)

    switch (remaining) {
        case 4:
            text.textContent = "Is that a yes?"
            break
        case 3:
            text.textContent = "Im gonna assume it is"
            break
        case 2:
            text.textContent = "Clicking 2 more times might do something fun"
            break
        case 1:
            text.style.fontSize = '32px'
            text.textContent = "I LIED PLEASE STOP YOUR GONNA BLOW US UP "
            break
    }
  return;
}

locked = true;

// Trigger both explosions
heart.classList.remove("tap");
heart.classList.add("explode");
explosion.classList.add("explode");

// Navigate after animation
setTimeout(() => {
  window.location.href = NEXT_PAGE;
}, 650);
}

heart.addEventListener("click", handleHeartClick);

heart.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    handleHeartClick();
  }
});