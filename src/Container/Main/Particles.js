const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
};

const particles = [
  {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: getRandomColor()
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000"
        },
        polygon: {
          nb_sides: 3
        },
        image: {
          src: "",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: true,
          speed: 0.2795204795204795,
          opacity_min: 0.023976023976023976,
          sync: true
        }
      },
      size: {
        value: 0,
        random: true,
        anim: {
          enable: true,
          speed: 38.36163836163836,
          size_min: 68.73126873126874,
          sync: true
        }
      },
      line_linked: {
        enable: true,
        distance: 200,
        color: getRandomColor(),
        opacity: 0.1,
        width: 1
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: true,
          rotateX: 10000,
          rotateY: 10000
        }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            width: 1,
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: false
  },
  {
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: getRandomColor()
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: false,
          speed: 4,
          size_min: 0.3,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: getRandomColor(),
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "bubble"
        },
        onclick: {
          enable: true,
          mode: "repulse"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
            width: 1
          }
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3
        },
        repulse: {
          distance: 400,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: false
  },
  {
    particles: {
      number: {
        value: 6,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: getRandomColor()
      },
      shape: {
        type: "polygon",
        stroke: {
          width: 0,
          color: "#000"
        },
        polygon: {
          nb_sides: 6
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.3,
        random: true,
        anim: {
          enable: true,
          speed: 0.1,
          opacity_min: 0.1,
          sync: true
        }
      },
      size: {
        value: 30,
        random: true,
        anim: {
          enable: true,
          speed: 10,
          size_min: 10,
          sync: true
        }
      },
      line_linked: {
        enable: false,
        distance: 200,
        color: getRandomColor(),
        opacity: 1,
        width: 2
      },
      move: {
        enable: true,
        speed: 8,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: false
  }
];
const interactivity = ["repulse" /*, "bubble"*/]; // bubble looks weird
const interactivity_hover = [...interactivity, "grab"];
const interactivity_click = [...interactivity, "push", "remove"];
const out_mode = ["out", "bounce"];
const direction = [
  "none",
  "top",
  "left",
  "right",
  "bottom",
  "top-right",
  "top-left",
  "bottom-right",
  "bottom-left"
];
const generateRandom = seed => {
  let selected = particles[seed % particles.length];
  selected.interactivity.events.onhover.mode =
    interactivity_hover[seed % interactivity_hover.length];
  selected.interactivity.events.onclick.mode =
    interactivity_click[seed % interactivity_click.length];
  selected.particles.move.direction = direction[seed % direction.length];
  selected.particles.move.out_mode = direction[seed % out_mode.length];
  return selected;
};
export default () => {
  let seed = Math.floor(Math.random() * 10000);
  return seed % 2 === 0
    ? particles[seed % particles.length]
    : generateRandom(seed);
};
