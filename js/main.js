gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {

  // Initialize Lucide AFTER DOM is ready
  lucide.createIcons();

  // Hero entrance animation (Advanced)
  gsap.from(".hero-title", {
    opacity: 0,
    y: 50,
    rotationX: -45,
    duration: 1.2,
    ease: "back.out(1.5)",
    transformOrigin: "bottom center"
  });

  gsap.from(".hero-subtitle", {
    opacity: 0,
    y: 30,
    duration: 1,
    ease: "power3.out",
    delay: 0.3
  });

  gsap.from(".hero-actions .hero-btn", {
    opacity: 0,
    y: 40,
    scale: 0.8,
    duration: 0.8,
    ease: "back.out(2)",
    stagger: 0.1,
    delay: 0.5
  });

});

// Advanced Parallax for About Image
gsap.to(".about-image-frame", {
  yPercent: 20,
  ease: "none",
  scrollTrigger: {
    trigger: ".about-layout",
    start: "top bottom",
    end: "bottom top",
    scrub: true
  }
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


// Skills reveal animation (Advanced 3D Flip)
gsap.utils.toArray(".skill-group").forEach((group) => {
  gsap.from(group.querySelectorAll(".skill-item"), {
    scrollTrigger: {
      trigger: group,
      start: "top 85%",
      once: true
    },
    opacity: 0,
    rotationY: 90,
    y: 40,
    duration: 0.8,
    ease: "back.out(1.5)",
    stagger: 0.08
  });
});

// Projects reveal (Advanced 3D entrance)
gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".projects-grid",
    start: "top 85%",
    once: true
  },
  opacity: 0,
  y: 60,
  rotationX: -15,
  transformOrigin: "top center",
  duration: 1,
  ease: "power3.out",
  stagger: 0.15
});

// 3D Hover Tilt effect for Projects
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Calculate rotation relative to center
    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;

    gsap.to(card, {
      rotationX: yPct * -5, // max 5 deg
      rotationY: xPct * 5,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.5
    });
  });

  card.addEventListener("mouseleave", () => {
    gsap.to(card, {
      rotationX: 0,
      rotationY: 0,
      ease: "elastic.out(1, 0.3)",
      duration: 1
    });
  });
});

document.querySelectorAll(".project-expand").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".project-card");
    card.classList.toggle("is-expanded");
  });
});

// Experience section reveal (Advanced Slide-in Stagger)
gsap.from(".experience-card", {
  scrollTrigger: {
    trigger: ".experience-list",
    start: "top 85%",
    once: true
  },
  opacity: 0,
  x: (index) => (index % 2 === 0 ? -40 : 40), // alternate left/right
  y: 30,
  duration: 0.8,
  ease: "power3.out",
  stagger: 0.2
});

// Education reveal
gsap.fromTo(
  ".education-card",
  { opacity: 0, scale: 0.95, y: 30 },
  {
    opacity: 1,
    scale: 1,
    y: 0,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".education-section",
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

  // Use gsap.quickTo for performance (creates a highly optimized function)
  const xToDot = gsap.quickTo(cursorDot, "x", { duration: 0, ease: "none" });
  const yToDot = gsap.quickTo(cursorDot, "y", { duration: 0, ease: "none" });

  const xToOutline = gsap.quickTo(cursorOutline, "x", { duration: 0.4, ease: "power3.out" });
  const yToOutline = gsap.quickTo(cursorOutline, "y", { duration: 0.4, ease: "power3.out" });

  // Track mouse coordinates
  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // CSS translate(-50%, -50%) handles the centering, so just pass the coordinates
    xToDot(posX);
    yToDot(posY);
    xToOutline(posX);
    yToOutline(posY);
  });

  // Add hover effects for all interactive elements
  const interactives = document.querySelectorAll("a, button, .project-card");

  interactives.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-hover");
    });

    el.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover");
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
