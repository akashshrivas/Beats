let tl = gsap.timeline();

tl.from('#main_head', {
    opacity:0,
    delay:1,
    duration:1
})





new AnimationScroll({
    selector: "#spec_img",
    trigger: 0.25,
    transform: "-5yvw",
    easing: "ease-in-out",
    duration: 2,
    onLoad: false,
    scrollSpeed: 0.7,
    pauseOnScroll: true
});


