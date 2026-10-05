const musicButton = document.getElementById("musicButton");
const favoriteSong = document.getElementById("favoriteSong");

musicButton.addEventListener("click", function() {

    if (favoriteSong.paused) {
        favoriteSong.play();
        musicButton.classList.add("playing");
    } else {
        favoriteSong.pause();
        musicButton.classList.remove("playing");
    }

});


// =========================
// LITTLE WELCOME MESSAGE
// =========================

window.addEventListener("load", function() {

    console.log("Welcome to my little website! 🌷");

});
// =========================
// FAVORITE FOOD POPUP
// =========================

const foodButton = document.getElementById("foodButton");
const foodPopup = document.getElementById("foodPopup");
const closeFood = document.getElementById("closeFood");

foodButton.addEventListener("click", function() {
    foodPopup.classList.add("show");
});

closeFood.addEventListener("click", function() {
    foodPopup.classList.remove("show");
});

foodPopup.addEventListener("click", function(event) {

    if (event.target === foodPopup) {
        foodPopup.classList.remove("show");
    }

});
