gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  // Initialize Lucide AFTER DOM is ready
  lucide.createIcons();

  // Hero entrance animation
  gsap.from(".hero-content > *", {
    opacity: 0,
    y: 30,
    duration: 0.9,
    ease: "power2.out",
    stagger: 0.15
  });

});

// About + Skills reveal (once, subtle)
gsap.utils.toArray(".section-reveal").forEach((section) => {
  gsap.from(section, {
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      once: true
    },
    opacity: 0,
    y: 24,
    duration: 0.7,
    ease: "power2.out"
  });
});

// About points stagger (very subtle)
gsap.from(".about-point", {
  scrollTrigger: {
    trigger: ".about-points",
    start: "top 85%",
    once: true
  },
  opacity: 0,
  y: 16,
  duration: 0.5,
  ease: "power2.out",
  stagger: 0.12
});

// About image + text entrance
gsap.from(".reveal-left", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    once: true
  },
  opacity: 0,
  x: -40,
  duration: 0.8,
  ease: "power2.out"
});

gsap.from(".reveal-right", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 80%",
    once: true
  },
  opacity: 0,
  x: 40,
  duration: 0.8,
  ease: "power2.out"
});


// Skills reveal animation
gsap.from(".reveal-skill", {
  scrollTrigger: {
    trigger: ".skills-groups",
    start: "top 85%",
    once: true
  },
  opacity: 0,
  y: 24,
  duration: 0.6,
  ease: "power2.out",
  stagger: 0.15
});

// Projects reveal
gsap.from(".reveal-project", {
  scrollTrigger: {
    trigger: ".projects-grid",
    start: "top 85%",
    once: true
  },
  opacity: 0,
  y: 30,
  duration: 0.7,
  ease: "power2.out",
  stagger: 0.18
});

document.querySelectorAll(".project-expand").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".project-card");
    card.classList.toggle("is-expanded");
  });
});

// Experience section reveal
gsap.from(".experience-card", {
  scrollTrigger: {
    trigger: ".experience-list",
    start: "top 85%",
    once: true
  },
  opacity: 0,
  y: 28,
  duration: 0.7,
  ease: "power2.out"
});

gsap.from(".education-card", {
  scrollTrigger: {
    trigger: ".education-list",
    start: "top 85%",
    once: true
  },
  opacity: 0,
  y: 24,
  duration: 0.6,
  ease: "power2.out"
});

gsap.from(".contact-content", {
  scrollTrigger: {
    trigger: ".contact-section",
    start: "top 85%",
    once: true
  },
  opacity: 0,
  y: 24,
  duration: 0.6,
  ease: "power2.out"
});

document.getElementById("year").textContent = new Date().getFullYear();
