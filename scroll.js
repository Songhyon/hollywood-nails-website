// Give the header a solid background once the page scrolls past the top of the hero
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("solid", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
