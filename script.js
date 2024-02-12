gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();

var tl = gsap.timeline();

tl.from("#about-sec-text h2,#about-sec-text p,#about-sec-text p span", {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger:0.3
})
tl.from("#about-sec-text button", {
    x: -50,
    opacity: 0,
    duration:0.8
})
tl.from("#about-sec-img", {
    scale: 0,
    duration:0.8
})
tl.from(".page-2-sec img", {
    rotateY: 90,
    duration: 1,
    scrollTrigger: {
        trigger: ".page-2-sec ",
        scroller: "#main",
        start: "top 40%",
        end: "top 20%",
        scrub:2
    }
})
tl.from(".page-2-sec h2,.page-2-sec p,.page-2-sec button", {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger:0.3,
    scrollTrigger: {
        trigger: ".page-2-sec",
        scroller: "#main",
        start: "top 20%",
        end: "top 10%",
        scrub:2
    }
})
tl.from("#p3-left h3,#p3-left p,#p3-left button", {
    opacity: 0,
    rotateY: 90,
    duration:1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top 30%",
        end: "top 15%",
        scrub:2
    }
})
tl.from("#p3-right img", {
    x: 30,
    y: 30,
    opacity:0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "#main",
        start: "top 25%",
        end: "top 10%",
        scrub: 2,
    }
})
tl.from("#p4-right h3,#p4-right p,#p4-right button", {
    opacity: 0,
    rotateY: 90,
    duration:1,
    stagger: 0.5,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start: "top 30%",
        end: "top 15%",
        scrub:2
    }
})
tl.from("#p4-left img", {
    x: -30,
    y: 30,
    opacity:0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page4",
        scroller: "#main",
        start: "top 25%",
        end: "top 10%",
        scrub: 2,
    }
})
tl.from("#page4 footer", {
    y: 30,
    opacity: 0,
    duration: 0.3,
    scrollTrigger: {
        trigger: "#page4 footer",
        scroller: "#main",
        start: "top 97%",
        end: "top 97%",
        scrub:2
    }
})