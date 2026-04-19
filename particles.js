const isMobile = window.matchMedia("(pointer: coarse)").matches;

const desktopConfig = {
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  background: {
    color: "#000000"
  },
  particles: {
    number: {
      value: Math.min(100, Math.max(40, window.innerWidth / 15)),
      density: {
        enable: true,
        area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: { min: 0.05, max: 0.25 }
    },
    size: {
      value: { min: 0.5, max: 2 }
    },
    links: {
      enable: true,
      distance: 200,
      color: "#ffffff",
      opacity: 0.3,
      width: 1.2
    },
    move: {
      enable: true,
      speed: 0.15,
      random: true,
      outModes: {
        default: "out"
      }
    }
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "connect"]
      },
      onClick: {
        enable: false
      }
    },
    modes: {
      grab: {
        distance: 220,
        links: {
          opacity: 0.7
        }
      },
      connect: {
        distance: 160,
        links: {
          opacity: 0.5
        }
      }
    }
  },
  detectRetina: true
};

// mobile: não carrega partículas para melhorar desempenho
if (!isMobile) {
  tsParticles.load("tsparticles", desktopConfig);
}