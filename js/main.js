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

gsap.fromTo(
  ".education-card",
  { opacity: 0, y: 24 },
  {
    opacity: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".education-card",
      start: "top 85%",
      once: true
    }
  }
);

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

// ======================================================
// CUSTOM CURSOR & MAGNETIC BUTTONS
// ======================================================
document.addEventListener("DOMContentLoaded", () => {
  const cursorDot = document.getElementById("cursor-dot");
  const cursorOutline = document.getElementById("cursor-outline");

  if (!cursorDot || !cursorOutline) return;

  // Track mouse coordinates
  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows exactly, offsetting for center
    cursorDot.style.left = `${posX - 4}px`;
    cursorDot.style.top = `${posY - 4}px`;

    // Outline follows with a slight delay using GSAP
    gsap.to(cursorOutline, {
      x: posX - 20, // offset half the width
      y: posY - 20, // offset half the height
      duration: 0.15,
      ease: "power2.out"
    });
  });

  // Add hover effects for all interactive elements
  const interactives = document.querySelectorAll("a, button, .project-card");

  interactives.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-hover");
      // Adjust offset for outline expansion
      gsap.to(cursorOutline, { x: "-=10", y: "-=10", duration: 0.15 });
    });

    el.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover");
      gsap.to(cursorOutline, { x: "+=10", y: "+=10", duration: 0.15 });
    });
  });

  // Magnetic Button Logic
  const magneticElements = document.querySelectorAll(".hero-btn");

  magneticElements.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Move the button slightly towards the cursor
      gsap.to(el, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: "power2.out"
      });

      // Move the icon/content inside even more to create parallax
      const icon = el.querySelector("i, svg");
      if (icon) {
        gsap.to(icon, {
          x: x * 0.2,
          y: y * 0.2,
          duration: 0.4,
          ease: "power2.out"
        });
      }
    });

    el.addEventListener("mouseleave", () => {
      // Reset position
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)"
      });

      const icon = el.querySelector("i, svg");
      if (icon) {
        gsap.to(icon, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.3)"
        });
      }
    });
  });
});

// ======================================================
// KINETIC TYPOGRAPHY SCROLL
// ======================================================
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".kinetic-track");

  if (track) {
    // Parallax scrolling for the marquee
    gsap.to(track, {
      xPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: ".kinetic-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1 // smooth scrubbing
      }
    });
  }
});

// ======================================================
// DEVELOPER MODE TOGGLE
// ======================================================
document.addEventListener("DOMContentLoaded", () => {
  const devToggle = document.getElementById("dev-mode-toggle");

  if (devToggle) {
    // Check local storage for preference
    if (localStorage.getItem("devMode") === "enabled") {
      document.body.classList.add("dev-mode");
    }

    devToggle.addEventListener("click", () => {
      document.body.classList.toggle("dev-mode");

      if (document.body.classList.contains("dev-mode")) {
        localStorage.setItem("devMode", "enabled");
      } else {
        localStorage.setItem("devMode", "disabled");
      }
    });
  }
});
