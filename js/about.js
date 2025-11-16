// ===== Rocket scroll animation on About hero - NEW BOTTOM-LEFT PATH =====
const aboutHero = document.querySelector(".hero-center-banner");
const heroRocket = document.querySelector(".hero-rocket");

if (aboutHero && heroRocket) {
  const updateRocket = () => {
    const rect = aboutHero.getBoundingClientRect();
    const viewportH = window.innerHeight;

    // Only animate while hero is on screen
    if (rect.bottom < 0 || rect.top > viewportH) return;

    // progress: 0 when hero just enters, 1 near bottom
    const progressRaw = (viewportH - rect.top) / (viewportH + rect.height);
    const progress = Math.min(1, Math.max(0, progressRaw));

    // --- NEW PATH ADJUSTMENTS ---
    
    // X: Start far left (-30vw) and move across to the right (80vw).
    const x = -80 + progress * 120;

    // Y: Start low (0%) and move up (-100%) as the user scrolls.
    const y = 40 - progress * 10;

    // Rotation: Start pointing bottom-left (-50deg) and straighten up (-5deg).
    const rotation = -50 + progress * 135;

    heroRocket.style.transform =
      `translate(${x}vw, ${y}%) rotate(${rotation}deg)`;
  };

  // Initial position + listen to scroll / resize
  updateRocket();
  window.addEventListener("scroll", updateRocket);
  window.addEventListener("resize", updateRocket);
}