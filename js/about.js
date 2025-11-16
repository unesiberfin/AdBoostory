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

// ===== Continuous marquee for hero cards =====
const marqueeTrack = document.querySelector(".marquee-track");

if (marqueeTrack) {
  const originalCards = Array.from(marqueeTrack.children);
  const originalWidth = marqueeTrack.scrollWidth;

  // Duplicate cards until we have at least two full sets to prevent gaps
  while (marqueeTrack.scrollWidth < originalWidth * 2) {
    originalCards.forEach((card) => {
      const clone = card.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      marqueeTrack.appendChild(clone);
    });
  }

  // Match animation distance to the width of the original set for a seamless loop
  marqueeTrack.style.setProperty("--marquee-span", `${originalWidth}px`);
}