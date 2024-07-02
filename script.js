// GSAP ScrollTrigger registration
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
const locoScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

// Update ScrollTrigger on Locomotive Scroll update
locoScroll.on("scroll", ScrollTrigger.update);

// Set up ScrollTrigger scrollerProxy
ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});

// Custom cursor function
const customCursorPage1 = () => {
  const page1Content = document.querySelector('.page1-content');
  const cursor = document.querySelector('.cursor');

  page1Content.addEventListener('mousemove', (info) => {
    gsap.to(cursor, {
      x: info.x - 70,
      y: info.y - 70,
      duration: 1.5,
      ease: "power4.out"
    });
  });

  page1Content.addEventListener('mouseenter', () => {
    gsap.to(cursor, {
      opacity: 1,
    });
  });

  page1Content.addEventListener('mouseleave', () => {
    gsap.to(cursor, {
      opacity: 0,
    });
  });
};

// Call the custom cursor function
customCursorPage1();

// Menubar function
const menubar = () => {
  const menu = document.querySelector('#menu');
  const close = document.querySelector('#close');

  var tl = gsap.timeline()

  tl.to('#Menubar', {
    top: 0,
    duration: 1
  })

  tl.pause()
  menu.addEventListener('click', () => {
    tl.play()
  })
  close.addEventListener('click', () => {
    tl.reverse()
  })
};

// Call the menubar function
menubar();

// Swiper initialization
const swiperJs = () => {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
    },
    speed: 10000,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

// Call the Swiper initialization function
swiperJs();

// GSAP animations
var tl1 = gsap.timeline();

tl1.from("#venture", {
  x: 100,
  duration: 0.5,
});

tl1.from("h1 span", {
  y: 300,
  stagger: 0.15,
  duration: 0.4,
  opacity: 0,
  ease: "power1.out",
});

const menubaranimation = () => {
  let tm = gsap.timeline();

  tm.from("#menu-top-left video", {
    scale: 0,
    duration: 1,
  },"menu")
  
  .from(".menu-bottom hr", {
    width: 0,
    opacity: 0,
    delay: 0.5,
    duration: 1
  },"menu");
  tm.from("#menu-bottom-info h5, .menu-bottom-sm",{
    x: 50,
    ease: "power1.in",
    delay: 0.5,
    duration: 0.5
  }, "menu")

  tm.from("#menu-top-right li, a",{
    y: 50,
    stagger: 0.07,
    delay: 0.2,
    duration: 0.3,
    ease: "power1.in"
  },"menu")


};
const menu = document.getElementById('menu');

menu.addEventListener('click',()=>{
  menubaranimation();

})



const page2animation = ()=>{
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      scroller: "[data-scroll-container]", // Adjusted to use Locomotive Scroll container
      start: 'top 50%', // Adjusted start position
      end: "top 0", // Adjusted end position
      markers: true,
    },
  });
  
  tl2.from(".page2-content span",{
    y: 100,
    opacity: 0,
  })
  
  tl2.from(".page2-content hr",{
    // x: -200,
    width: 0,
    opacity: 0,
  })
  
  tl2.from(".page2-content p", {
    y: 100,
    opacity: 0
  });
}
page2animation();


const page3animation = ()=>{
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3",
      scroller: "[data-scroll-container]", // Adjusted to use Locomotive Scroll container
      start: 'top 50%', // Adjusted start position
      end: "top 0", // Adjusted end position
      markers: true,
    },
  });
  
  tl2.from(".page3-content a",{
    y: 100,
    opacity: 0,
    stagger: 0.2,
  })
  
}
page3animation();

const page5animation = ()=>{
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page5",
      scroller: "[data-scroll-container]", // Adjusted to use Locomotive Scroll container
      start: 'top 50%', // Adjusted start position
      end: "top 0", // Adjusted end position
      markers: true,
    },
  });
  
  tl2.from(".page5-content span",{
    y: 100,
    opacity: 0,
  })
  
  tl2.from(".page5-content hr",{
    width: 0,
    opacity: 0,
  })
  
  tl2.from(".page5-content p", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
  });
}
page5animation();



let tl9 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page9",
    scroller: "[data-scroll-container]", // Adjusted to use Locomotive Scroll container
    start: 'top 50%', // Adjusted start position
    end: "top 0", // Adjusted end position
    markers: true,
  },
});

tl9.from("#page9-content-top a p",{
  y: 100,
  opacity: 0,
  duration: 0.5,
})

