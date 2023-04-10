// Créer une nouvelle TimelineMax
var tl = new TimelineMax({ repeat: -1, repeatDelay: 5 });

// Ajouter l'animation de mouvement du bloc rouge
tl.to(".block", 2.5, { x: "120vw", ease: Power0.easeNone });

// Démarrer l'animation
tl.play();



var vid = document.getElementById("fullscreen-video");
vid.playbackRate = 0.6;


