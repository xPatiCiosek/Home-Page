let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to('#rocket', 3, {y: -700, duration: 4})
.fromTo('.container', {opacity:0}, {opacity:1, duration: 3})
.fromTo('.text-box', {opacity:0}, {opacity:1, duration: 3})
.fromTo('#underTittle', {opacity:0}, {opacity:1, duration: 2})

let scene = new ScrollMagic.Scene({
    triggerElement: '.landing-page',
    duration: '100%',
    triggerHook: 0,
    
})
.setTween(timeline)
.addTo(controller)



