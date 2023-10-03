const hamburgerBox = document.querySelector(".hamburger-box");
const lines = document.querySelectorAll(".line");
const navList = document.querySelector(".nav-list");
hamburgerBox.addEventListener("click", () => {
  for (let i = 0; i < lines.length; i++) {
    lines[i].classList.toggle("clicked");
  }
  navList.classList.toggle("clicked");
});
