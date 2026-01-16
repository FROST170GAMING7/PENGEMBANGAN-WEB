// Create stars background
const stars = document.getElementById("stars");
const starsCount = 200;

for (let i = 0; i < starsCount; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  const size = Math.random() * 3;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  star.style.left = `${Math.random() * 100}%`;
  star.style.top = `${Math.random() * 100}%`;

  star.style.animation = `twinkle ${Math.random() * 5 + 3}s infinite alternate`;

  stars.appendChild(star);
}

// Add animation for stars
const style = document.createElement("style");
style.textContent = `
            @keyframes twinkle {
                0% { opacity: 0.2; }
                100% { opacity: 1; }
            }
        `;
document.head.appendChild(style);

// Home button functionality
document.getElementById("homeBtn").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Pause video //
let players = [];

function onYouTubeIframeAPIReady() {
  const iframes = document.querySelectorAll('.yt');

  iframes.forEach((iframe, index) => {
    players[index] = new YT.Player(iframe, {
      events: {
        onStateChange: (event) => {
          if (event.data === YT.PlayerState.PLAYING) {
            players.forEach(player => {
              if (player !== event.target) {
                player.pauseVideo();
              }
            });
          }
        }
      }
    });
  });
}
