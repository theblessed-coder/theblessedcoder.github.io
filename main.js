let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* DarkMode */
const body = document.body;
const darkModeIcon = document.getElementById("dark-mode-icon");
const lightModeIcon = document.getElementById("light-mode-icon");

// Check user's preference from local storage
if (localStorage.getItem("dark-mode") === "enabled") {
  enableDarkMode();
}

// Toggle between dark and light mode
function toggleDarkMode() {
  if (body.classList.contains("dark-mode")) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
}

// Enable dark mode
function enableDarkMode() {
  body.classList.add("dark-mode");
  localStorage.setItem("dark-mode", "enabled");
  darkModeIcon.style.display = "none";
  lightModeIcon.style.display = "inline-block";
}

// Enable light mode
function enableLightMode() {
  body.classList.remove("dark-mode");
  localStorage.setItem("dark-mode", null);
  darkModeIcon.style.display = "inline-block";
  lightModeIcon.style.display = "none";
}

// Add event listener for the toggle container
document
  .querySelector(".toggle-container")
  .addEventListener("click", toggleDarkMode);

//Mobile NavBar
/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// GSAP Animations

const tl = gsap.timeline();

gsap.to("h3", {
  duration: 1,
  ease: "back",
});

tl.fromTo(
  "h1",
  { scale: 0, opacity: 0 },
  {
    scale: 1,
    ease: "back",
    duration: 1,
    opacity: 1,
  }
)
  .fromTo(
    "p",
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      ease: "back",
      duration: 1,
      opacity: 1,
      delay: 0.5,
    }
  )
  .fromTo(
    ".btn",
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      ease: "back",
      duration: 1,
      opacity: 1,
      delay: 0.5,
    }
  )
  .fromTo(
    ".contact",
    { x: 100, opacity: 0 },
    {
      x: 0,
      ease: "power2.inOut",
      duration: 1,
      opacity: 1,
      delay: 0.5,
    }
  );
