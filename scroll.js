// Hollywood Nails: Lenis smooth scroll + GSAP animations (libraries self-hosted in vendor/).
// Everything stays visible if the libraries fail to load or the visitor prefers reduced motion.
(() => {
  const header = document.querySelector(".site-header");
  const onHeader = () => header.classList.toggle("solid", window.scrollY > 40);
  addEventListener("scroll", onHeader, { passive: true });
  onHeader();

  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  // 1) Lenis smooth scroll, synced with GSAP's ticker
  let lenis = null;
  if (window.Lenis) {
    document.documentElement.style.scrollBehavior = "auto";
    lenis = new Lenis({ duration: 1.15, easing: t => 1 - Math.pow(1 - t, 3) });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    document.querySelectorAll('a[href^="#"]').forEach(a => a.addEventListener("click", e => {
      const id = a.getAttribute("href");
      const el = id === "#top" ? 0 : document.querySelector(id);
      if (el === null) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: id === "#top" ? 0 : -72 });
    }));
  }

  // helper: wrap each line of a heading in a mask so it can slide up from below
  const maskLines = el => {
    const parts = el.innerHTML.split(/<br\s*\/?>/i);
    el.innerHTML = parts.map(p => `<span class="line-mask"><span>${p}</span></span>`).join("");
    return el.querySelectorAll(".line-mask > span");
  };

  // 2) Hero: big name slides up line by line, photo settles from a slow zoom
  const heroImg = document.querySelector(".hero-img");
  const wordLines = maskLines(document.querySelector(".wordmark"));
  const intro = gsap.timeline({ defaults: { ease: "expo.out" } });
  intro.from(heroImg, { scale: 1.22, duration: 2.4, ease: "power2.out" }, 0)
       .from(wordLines, { yPercent: 110, duration: 1.4, stagger: 0.12 }, 0.15)
       .from(".hero-row > *", { y: 24, opacity: 0, duration: 1, stagger: 0.1 }, 0.7)
       .from(".site-header", { y: -20, opacity: 0, duration: 0.8 }, 0.9);
  // photo drifts slower than the page
  gsap.to(heroImg, { yPercent: 18, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });

  // 3) Section titles slide up out of a mask
  document.querySelectorAll("main h2").forEach(h => {
    const lines = maskLines(h);
    gsap.from(lines, { yPercent: 110, duration: 1.1, ease: "expo.out", stagger: 0.08,
      scrollTrigger: { trigger: h, start: "top 88%" } });
  });

  // 4) Services: rows rise in one after another
  gsap.from(".service-list li", { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.12,
    scrollTrigger: { trigger: ".service-list", start: "top 85%" } });

  // 5) Gallery: photos unveil upward, then drift gently inside their frames
  document.querySelectorAll(".gallery figure").forEach((fig, i) => {
    const img = fig.querySelector("img");
    gsap.fromTo(fig, { clipPath: "inset(100% 0% 0% 0% round 14px)" },
      { clipPath: "inset(0% 0% 0% 0% round 14px)", duration: 1.3, ease: "expo.out", delay: (i % 4) * 0.08,
        scrollTrigger: { trigger: fig, start: "top 92%" } });
    gsap.fromTo(img, { scale: 1.25, yPercent: -6 }, { scale: 1.1, yPercent: 6, ease: "none",
      scrollTrigger: { trigger: fig, start: "top bottom", end: "bottom top", scrub: true } });
  });

  // 6) Prices: each column's rows fade up in sequence
  document.querySelectorAll(".price-col").forEach(col => {
    gsap.from(col.querySelectorAll("h3, li"), { y: 16, opacity: 0, duration: 0.6, ease: "power2.out", stagger: 0.03,
      scrollTrigger: { trigger: col, start: "top 85%" } });
  });
  gsap.from(".price-cta", { y: 30, opacity: 0, duration: 0.9, ease: "power3.out",
    scrollTrigger: { trigger: ".price-cta", start: "top 92%" } });

  // 7) "Asiakkaat kehuvat": an endless slow ribbon of praise
  const praise = document.querySelector(".praise");
  if (praise) {
    const track = document.createElement("div");
    track.className = "praise-track";
    praise.parentNode.insertBefore(track, praise);
    track.appendChild(praise);
    praise.style.flexWrap = "nowrap";
    const copy = praise.cloneNode(true);
    copy.setAttribute("aria-hidden", "true");
    track.appendChild(copy);
    praise.style.paddingRight = copy.style.paddingRight = "28px";
    const loop = gsap.to(track, { xPercent: -50, duration: 28, ease: "none", repeat: -1 });
    // speeds up a little while scrolling
    ScrollTrigger.create({ trigger: ".praise-section", start: "top bottom", end: "bottom top",
      onUpdate: self => gsap.to(loop, { timeScale: 1 + Math.min(Math.abs(self.getVelocity()) / 400, 3), duration: 0.2, overwrite: true,
        onComplete: () => gsap.to(loop, { timeScale: 1, duration: 1 }) }) });
  }

  // 8) Contact: info + map card rise in
  gsap.from(".contact-grid > div", { y: 50, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.15,
    scrollTrigger: { trigger: ".contact-grid", start: "top 85%" } });
})();
