console.log("Hi");

const hMenu = document.getElementById("hMenu");
const mobileMenu = document.getElementById("mMenu");

hMenu.addEventListener("click", () => {
  hMenu.classList.toggle("open");

  if (!hMenu.classList.contains("open")) {
    mobileMenu.classList.add("fade-out");
    mobileMenu.classList.remove("fade-in");
  } else {
    mobileMenu.classList.add("fade-in");
    mobileMenu.classList.remove("fade-out");
  }
});
