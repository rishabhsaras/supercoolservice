let homefunc = () => {
    const phoneNumber = "+919871787455";
    const message = "Hello! I am interested in your AC repair services.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
};
let toggleWhatsapp = () => {
    const phoneNumber = "+919871787455";
    const message = "Hello! I am interested in your AC services.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
};
document.querySelector(".call-toggle").addEventListener("click", function () {
    window.location.href = "tel:+919871787455";
});

let menu = document.querySelector("#menubar i");
let cross = document.querySelector(".cross-bar");
let back = document.querySelectorAll(".tags-section a");

menu.addEventListener("click", () => {
    tlmenu.play();
});
cross.addEventListener("click", () => {
    tlmenu.reverse();
});
back.forEach((elm, index) => {
    elm.addEventListener("click", () => {
        tlmenu.reverse();
    })
});

var tlmenu = gsap.timeline();
tlmenu.to(".menu-bar", {
    right: 0,
    duration: 0.5,
});
tlmenu.from(".tags-section a", {
    x: 100,
    opacity: 0,
    duration: 0.2,
    stagger: 0.1,
});
tlmenu.from(".menubar i", {
    opacity: 0,
    duration: 0.3,
})
tlmenu.pause();

// Mobile GSAP Animations (For smaller screens)
if (window.innerWidth <= 768) {
    // Hero Section Heading Animation
    gsap.from(".hdng-home", {
      opacity: 0,
      scale: 0.5,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.5
    });
  
    // Hero Section Paragraph Animation
    gsap.from(".para-home", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power2.out",
      delay: 1
    });
  }
  
  // Laptop GSAP Animations (For larger screens)
  if (window.innerWidth > 768) {
    // Hero Section Heading Animation
    gsap.from(".hdng-home", {
      opacity: 0,
      x: -200,
      duration: 1.5,
      ease: "power2.out",
      delay: 0.5
    });
  
    // Hero Section Paragraph Animation
    gsap.from(".para-home", {
      opacity: 0,
      x: 200,
      duration: 1.5,
      ease: "power2.out",
      delay: 1
    });
  }
  gsap.utils.toArray(".our-srvc-cntn").forEach(service => {
    gsap.from(service, {
      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: service,
        start: "top bottom", // Animation starts when the service card enters the viewport
        end: "bottom top",
        scrub: true,
      }
    });
  });
  gsap.from(".hdng-about", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".upper-section-about",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    }
  });
  
  gsap.from(".para-about-scs", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".lower-section-about",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    }
  });
  gsap.utils.toArray(".question-section").forEach(question => {
    gsap.from(question, {
      x: -200,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: question,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
  });
  gsap.from(".map-container", {
    opacity: 0,
    y: 100,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".map-container",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    }
  });
  
  gsap.from(".cntc-hdng", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".lwer-prt-sctn",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    }
  });
  gsap.from(".tags-srvc-ftr", {
    opacity: 1,
    y: 50,
    duration: 1.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".foot-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    }
  });
          
  // Animate navbar sliding from the top
  gsap.from(".navbar", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  });

  // Animate each menu tag with staggered fade-in from top
  gsap.from(".tags", {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
    stagger: 0.1,
    delay: 0.5,
  });


  // Animate toggle buttons sliding in from the right (x-axis)
  gsap.from(".whatsapp-toggle", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 1,
  });

  gsap.from(".call-toggle", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 1.2, // Slight delay for staggered effect
  });

  const navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }
  });

