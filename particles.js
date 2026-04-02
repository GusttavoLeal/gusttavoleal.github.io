let particlesInstance;

// INIT PARTICLES
tsParticles.load("tsparticles", {
  fullScreen: {
    enable: true,
    zIndex: -1 // fica no fundo corretamente
  },

  background: {
    color: "#0a0a0a"
  },

  particles: {
    number: {
      value: window.innerWidth < 768 ? 40 : 80,
      density: {
        enable: true,
        area: 900
      }
    },

    color: {
      value: ["#ffffff", "#dddddd", "#bbbbbb"]
    },

    shape: {
      type: "circle"
    },

    opacity: {
      value: { min: 0.05, max: 0.3 }
    },

    size: {
      value: { min: 0.5, max: 3 }
    },

    move: {
      enable: true,
      speed: 0.3
    },

    links: {
      enable: true,
      distance: 140,
      color: "#ffffff",
      opacity: 0.08,
      width: 1
    }
  },

  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab"
      }
    },

    modes: {
      grab: {
        distance: 150,
        links: { opacity: 0.2 }
      }
    }
  },

  detectRetina: true
}).then(container => {
  particlesInstance = container;
});


// SCROLL OTIMIZADO (SEM TRAVAR)
let ticking = false;

window.addEventListener("scroll", () => {
  if (!particlesInstance || ticking) return;

  ticking = true;

  requestAnimationFrame(() => {
    const scrollY = window.scrollY;

    particlesInstance.options.particles.move.speed = 0.3 + scrollY * 0.0003;
    particlesInstance.options.particles.opacity.value.max = 0.3 + scrollY * 0.0001;

    particlesInstance.refresh();

    ticking = false;
  });
});


// DARK / LIGHT AUTO
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function updateTheme(e) {
  if (!particlesInstance) return;

  const isDark = e.matches;

  particlesInstance.options.background.color = isDark ? "#0a0a0a" : "#ffffff";

  particlesInstance.options.particles.color.value = isDark
    ? ["#ffffff", "#dddddd"]
    : ["#000000", "#333333"];

  particlesInstance.options.particles.links.color = isDark
    ? "#ffffff"
    : "#000000";

  particlesInstance.refresh();
}

prefersDark.addEventListener("change", updateTheme);
updateTheme(prefersDark);