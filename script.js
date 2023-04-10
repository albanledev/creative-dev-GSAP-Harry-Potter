const video = document.querySelector('#ma-video');
video.playbackRate = 0.1;


gsap.to(".circle",{
    y:300,
    backgroundColor:"red",
    duration:2,
    ease:"bounce",
    onUpdated : () => {
        document.querySelector('.container').setAttribute("src", "https://www.youtube.com/embed/7wtfhZwyrcc?autoplay=1")
    }
})
  



