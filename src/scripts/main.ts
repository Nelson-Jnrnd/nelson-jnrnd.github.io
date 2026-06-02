// Reveal on scroll — animation-driven, fails open.
// Elements are visible by default. We add .in when they enter the viewport,
// which triggers a CSS keyframe animation. If the animation never plays
// (paused document timeline, hidden tab, etc.) the element stays visible.
(function () {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || typeof IntersectionObserver === "undefined") return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();

// Mapnav — click-to-toggle + outside-click + Escape
(function () {
  const mapnav = document.getElementById("mapnav");
  if (!mapnav) return;
  const toggle = mapnav.querySelector<HTMLButtonElement>(".mapnav__toggle");
  if (!toggle) return;
  const close = () => {
    mapnav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  };
  const open = () => {
    mapnav.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  };
  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    if (mapnav.classList.contains("is-open")) close();
    else open();
  });
  document.addEventListener("click", (e) => {
    if (
      mapnav.classList.contains("is-open") &&
      e.target instanceof Node &&
      !mapnav.contains(e.target)
    )
      close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mapnav.classList.contains("is-open")) {
      close();
      toggle.focus();
    }
  });
  // Closing after a pin click feels right — user has navigated
  mapnav.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", () => setTimeout(close, 80));
  });
})();
