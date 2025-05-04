let glryAnimation = () => {
    var tll = gsap.timeline();
    tll.from(".hdng-glry",{
      y:-100,
      opacity:0,
      duration:0.5,
      delay:0.5
    })
    tll.from(".img-section .imgs, .video-tag", {
      x: 100,
      opacity: 0,
      stagger: 0.05,
    });
  };
  glryAnimation();
  