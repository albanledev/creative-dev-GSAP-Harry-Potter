let quizQuestion1 = document.querySelector(".quizQuestion1")
let answerBtnPoufsouffle1 = document.querySelector(".Poufsouffle1")
let answerBtnSerdaigle1 = document.querySelector(".Serdaigle1")
let answerBtnSerpentard1 = document.querySelector(".Serpentard1")
let answerBtnGryffondor1 = document.querySelector(".Gryffondor1")

let quizQuestion2 = document.querySelector(".quizQuestion2")
let answerBtnPoufsouffle2 = document.querySelector(".Poufsouffle2")
let answerBtnSerdaigle2 = document.querySelector(".Serdaigle2")
let answerBtnSerpentard2 = document.querySelector(".Serpentard2")
let answerBtnGryffondor2 = document.querySelector(".Gryffondor2")

let quizQuestion3 = document.querySelector(".quizQuestion3")
let answerBtnPoufsouffle3 = document.querySelector(".Poufsouffle3")
let answerBtnSerdaigle3 = document.querySelector(".Serdaigle3")
let answerBtnSerpentard3 = document.querySelector(".Serpentard3")
let answerBtnGryffondor3 = document.querySelector(".Gryffondor3")

let quizQuestion4 = document.querySelector(".quizQuestion4")
let answerBtnPoufsouffle4 = document.querySelector(".Poufsouffle4")
let answerBtnSerdaigle4 = document.querySelector(".Serdaigle4")
let answerBtnSerpentard4 = document.querySelector(".Serpentard4")
let answerBtnGryffondor4 = document.querySelector(".Gryffondor4")

let quizQuestion5 = document.querySelector(".quizQuestion5")
let answerBtnPoufsouffle5 = document.querySelector(".Poufsouffle5")
let answerBtnSerdaigle5 = document.querySelector(".Serdaigle5")
let answerBtnSerpentard5 = document.querySelector(".Serpentard5")
let answerBtnGryffondor5 = document.querySelector(".Gryffondor5")

let quizStart = document.querySelector(".quizStart")
let quizIntro = document.querySelector(".quizIntro")
let Choixpeau = document.querySelector(".Choixpeau")
quizStart.addEventListener('click', ()=>{
    console.log("start")
    quizIntro.style.display = "none";
    quizQuestion1.style.display = "block";
    Choixpeau.style.display = "block";
} )

let quizResult = document.querySelector(".quizResult")
let Gryffondor = 0
let Serpentard = 0
let Poufsouffle = 0
let Serdaigle = 0

function leviterBoutons() {
    gsap.to(".btn", {
        duration: 1,
        y: -20,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",

    });
}

function faireTomberBoutons() {
    gsap.to(".btn", {
        duration: 0.3,
        y: 600,
        ease: "power1.in",
    });
}
function rendreVisibleBoutons() {
    gsap.from(".btn", {
        duration: 0.2,
        ease: "power4.in",
        opacity: 0,
    });
    gsap.to(".btn", {
        ease: "power4.in",
        opacity: 1,
    });
}

let btn = document.querySelectorAll(".btn");
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", faireTomberBoutons);
    btn[i].addEventListener("click", rendreVisibleBoutons);

}

leviterBoutons();


function FinalResult() {
    let Ecoles = [Poufsouffle, Serdaigle, Serpentard, Gryffondor]
    let EcolesResult = Ecoles.indexOf(Math.max(...Ecoles));
    let nom = ["Poufsouffle", "Serdaigle", "Serpentard", "Gryffondor"]
    let Emblem = ["img/Emblem_Hufflepuff.png", "img/Emblem_Ravenclaw.png", "img/Emblem_Slytherin.png", "img/Emblem_Gryffindor.png"]
    let nomResult = nom[EcolesResult]
    let EmblemResult = Emblem[EcolesResult]
    console.log(nomResult)
    quizResult.innerHTML = `
        <h2 class="TitleResult">Vous irez a ...</h2>
        <img src="${EmblemResult}" alt="EmblemResult" class="EmblemResult">
        <p class="NameResult">${nomResult}</p>
        <button class="btn reload" onclick="location.reload()">Recommencer</button>
        `
    gsap.from(".quizResult", {
        duration: 1,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "expo.out",
    });
    gsap.from(".TitleResult", {
        duration: 3,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "expo.out",

    });
    gsap.from(".EmblemResult", {
        duration: 3,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power4.out",
    });

    gsap.from(".NameResult", {
        duration: 3,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power4.out",
    });
    gsap.from(".reload", {
        duration: 7,
        y: 100,
        opacity: 0,
        stagger: 0.2,
        ease: "power4.out",
    });
    const duration = 15 * 1000,
        animationEnd = Date.now() + duration,
        defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // since particles fall down, start a bit higher than random
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            })
        );
        confetti(
            Object.assign({}, defaults, {
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            })
        );
    }, 250);
}
/* -------------------------------------- Quiz Question 1 -------------------------------------- */

answerBtnPoufsouffle1.addEventListener('click', ()=>{
    Poufsouffle += 2
    console.log("Poufsouffle: "+Poufsouffle)
    quizQuestion1.style.display = "none";
    quizQuestion2.style.display = "block";
} )
answerBtnSerdaigle1.addEventListener('click', ()=>{
    Serdaigle += 2
    console.log("Serdaigle: " + Serdaigle)
    quizQuestion1.style.display = "none";
    quizQuestion2.style.display = "block";
} )
answerBtnSerpentard1.addEventListener('click', ()=>{
    Serpentard += 2
    console.log("Serpentard: " + Serpentard)
    quizQuestion1.style.display = "none";
    quizQuestion2.style.display = "block";
} )
answerBtnGryffondor1.addEventListener('click', ()=>{
    Gryffondor += 2
    console.log("Gryffondor: " + Gryffondor)
    quizQuestion1.style.display = "none";
    quizQuestion2.style.display = "block";
} )

/* -------------------------------------- Quiz Question 2 -------------------------------------- */

answerBtnPoufsouffle2.addEventListener('click', ()=>{
    Poufsouffle++
    console.log("Poufsouffle: "+ Poufsouffle)
    quizQuestion2.style.display = "none";
    quizQuestion3.style.display = "block";
} )
answerBtnSerdaigle2.addEventListener('click', ()=>{
    Serdaigle++
    console.log("Serdaigle: " + Serdaigle)
    quizQuestion2.style.display = "none";
    quizQuestion3.style.display = "block";
} )
answerBtnSerpentard2.addEventListener('click', ()=>{
    Serpentard++
    console.log("Serpentard: " + Serpentard)
    quizQuestion2.style.display = "none";
    quizQuestion3.style.display = "block";
} )
answerBtnGryffondor2.addEventListener('click', ()=>{
    Gryffondor++
    console.log("Gryffondor: " + Gryffondor)
    quizQuestion2.style.display = "none";
    quizQuestion3.style.display = "block";
} )

/* -------------------------------------- Quiz Question 3 -------------------------------------- */

answerBtnPoufsouffle3.addEventListener('click', ()=>{
    Poufsouffle += 2
    console.log("Poufsouffle: "+Poufsouffle)
    quizQuestion3.style.display = "none";
    quizQuestion4.style.display = "block";
} )
answerBtnSerdaigle3.addEventListener('click', ()=>{
    Serdaigle += 2
    console.log("Serdaigle: " + Serdaigle)
    quizQuestion3.style.display = "none";
    quizQuestion4.style.display = "block";
} )
answerBtnSerpentard3.addEventListener('click', ()=>{
    Serpentard += 2
    console.log("Serpentard: " + Serpentard)
    quizQuestion3.style.display = "none";
    quizQuestion4.style.display = "block";
} )
answerBtnGryffondor3.addEventListener('click', ()=>{
    Gryffondor += 2
    console.log("Gryffondor: " + Gryffondor)
    quizQuestion3.style.display = "none";
    quizQuestion4.style.display = "block";
} )

/* -------------------------------------- Quiz Question 4 -------------------------------------- */

answerBtnPoufsouffle4.addEventListener('click', ()=>{
    Poufsouffle += 2
    console.log("Poufsouffle: "+Poufsouffle)
    quizQuestion4.style.display = "none";
    quizQuestion5.style.display = "block";
} )
answerBtnSerdaigle4.addEventListener('click', ()=>{
    Serdaigle += 2
    console.log("Serdaigle: " + Serdaigle)
    quizQuestion4.style.display = "none";
    quizQuestion5.style.display = "block";
} )
answerBtnSerpentard4.addEventListener('click', ()=>{
    Serpentard += 2
    console.log("Serpentard: " + Serpentard)
    quizQuestion4.style.display = "none";
    quizQuestion5.style.display = "block";
} )
answerBtnGryffondor4.addEventListener('click', ()=>{
    Gryffondor += 2
    console.log("Gryffondor: " + Gryffondor)
    quizQuestion4.style.display = "none";
    quizQuestion5.style.display = "block";
} )

/* -------------------------------------- Quiz Question 5 -------------------------------------- */

answerBtnPoufsouffle5.addEventListener('click', ()=>{
    Poufsouffle += 2
    console.log("Poufsouffle: "+Poufsouffle)
    quizQuestion5.style.display = "none";
    quizResult.style.display = "flex";
    FinalResult()
} )
answerBtnSerdaigle5.addEventListener('click', ()=>{
    Serdaigle += 2
    console.log("Serdaigle: " + Serdaigle)
    quizQuestion5.style.display = "none";
    quizResult.style.display = "flex";
    FinalResult()
} )
answerBtnSerpentard5.addEventListener('click', ()=>{
    Serpentard += 2
    console.log("Serpentard: " + Serpentard)
    quizQuestion5.style.display = "none";
    quizResult.style.display = "flex";
    FinalResult()
} )
answerBtnGryffondor5.addEventListener('click', ()=>{
    Gryffondor += 2
    console.log("Gryffondor: " + Gryffondor)
    quizQuestion5.style.display = "none";
    quizResult.style.display = "flex";
    FinalResult()
} )



