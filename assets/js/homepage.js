(() => {
  const root = document.getElementById("cp-homepage");
  if (!root) return;
  const slides = Array.from(root.querySelectorAll("[data-feature-slide]"));
  const count = root.querySelector("[data-feature-count]");
  const previous = root.querySelector("[data-feature-prev]");
  const next = root.querySelector("[data-feature-next]");
  if (!slides.length || !count || !previous || !next) return;
  let active = 0;
  const renderSlide = (index) => {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, position) => { slide.hidden = position !== active; });
    count.textContent = `${String(active + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
  };
  previous.addEventListener("click", () => renderSlide(active - 1));
  next.addEventListener("click", () => renderSlide(active + 1));
  renderSlide(0);
})();
