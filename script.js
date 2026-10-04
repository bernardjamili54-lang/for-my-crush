// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

```
event.preventDefault();

alert("Thank you for your message! ♡");

contactForm.reset();
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

