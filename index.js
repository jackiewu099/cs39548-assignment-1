const navbar = document.querySelector(".navbar");
const navbarSecondary = document.querySelector(".navbar-secondary");
const showThreshold = 400; 

const navbarHeight = navbar.offsetHeight; 
const navbarSecondaryHeight = navbarSecondary.offsetHeight;

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 75 && scrollY < showThreshold) {
    navbar.style.transform = `translateY(-${navbarHeight}px)`;
    navbarSecondary.style.transform = `translateY(-${navbarHeight + navbarSecondaryHeight}px)`;
  } else {
    navbar.style.transform = "translateY(0)";
    navbarSecondary.style.transform = "translateY(0)";
  }
});