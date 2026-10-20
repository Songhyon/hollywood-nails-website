// Give the header a solid background once the page scrolls past the top of the hero
const header = document.querySelector(".site-header");
const onHeader = () => header.classList.toggle("solid", window.scrollY > 40);
window.addEventListener("scroll", onHeader, { passive: true });
onHeader();

// Scroll-in animation: sections fade in with a gentle zoom the first time they come into view,
// and the top photo moves slower than the page. Off for visitors who prefer reduced motion.
(() => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
  const groups = [
    ["h2", false],
    [".service-list li", true],
    [".gallery figure", true],
    [".price-col", true],
    [".price-cta", false],
    [".praise li", true],
    [".contact-grid > div", true]
  ];
  const els = [];
  groups.forEach(([sel, stagger]) => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add("rv");
      if (stagger) el.style.setProperty("--d", (Math.min(i, 6) * 90) + "ms");
      els.push(el);
    });
  });
  document.documentElement.classList.add("anim-ready");
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
  els.forEach(el => io.observe(el));

  const img = document.querySelector(".hero-img");
  if (img) {
    let ticking = false;
    const drift = () => { const y = Math.min(window.scrollY, innerHeight); img.style.transform = `translateY(${y * 0.35}px) scale(1.06)`; ticking = false; };
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(drift); } }, { passive: true });
    drift();
  }
})();
