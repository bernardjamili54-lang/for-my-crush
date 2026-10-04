const musicButton = document.getElementById("musicButton");
const favoriteSong = document.getElementById("favoriteSong");

musicButton.addEventListener("click", function() {

```
if (favoriteSong.paused) {
    favoriteSong.play();
    musicButton.classList.add("playing");
} else {
    favoriteSong.pause();
    musicButton.classList.remove("playing");
}
```

});

// =========================
// LITTLE WELCOME MESSAGE
// =========================

window.addEventListener("load", function() {

```
console.log("Welcome to my little website! 🌷");
```

});
