/* default dom id (particles-js) */
//particlesJS();

/* config dom id */
//particlesJS('dom-id');

/* config dom id (optional) + config particles params */
particlesJS('particles-js', {
  particles: {
    color: '#fff',
    color_random: false,
    shape: 'circle', // "circle", "edge" or "triangle"
    opacity: {
      opacity: "rand",
      anim: {
        enable: false,
        speed: 10,
        opacity_min: 0,
        sync: true
      }
    },
    size: 5,
    size_random: true,
    nb: 500,
    line_linked: {
      enable_auto: true,
      distance: 250,
      color: '#A00',
      opacity: 0,
      width: 0,
      condensed_mode: {
        enable: true,
        rotateX: 100,
        rotateY: 100
      }
    },
    anim: {
      enable: true,
      speed: 1
    }
  },
  interactivity: {
    enable: true,
    mouse: {
      distance: 500
    },
    detect_on: 'canvas', // "canvas" or "window"
    mode: false, // "grab" or false
    line_linked: {
      opacity: .5
    },
    events: {
      onclick: {
        enable: true,
        mode: 'push', // "push" or "remove"
        nb: 10
      },
      onresize: {
        enable: true,
        mode: 'bounce', // "out" or "bounce"
        density_auto: false,
        density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
      }
    }
  },
  /* Retina Display Support */
  retina_detect: true
});