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
/*
URL_PoufsouffleEmblem.src = "img/PoufsouffleEmblem.png";
URL_SerdaigleEmblem.src = "img/SerdaigleEmblem.png";
URL_SerpentardEmblem.src = "img/SerpentardEmblem.png";
URL_GryffondorEmblem.src = "img/Emblem_Gryffindor.png";
let resultEmblem = document.querySelector(".img");
let GryffondorEmblem = document.querySelector(".img");
let SerpentardEmblem = document.querySelector("img");
let PoufsouffleEmblem = document.querySelector("img");
let SerdaigleEmblem = document.querySelector("img");*/

function FinalResult() {
    let Ecoles = [Poufsouffle, Serdaigle, Serpentard, Gryffondor]
    let EcolesResult = Ecoles.indexOf(Math.max(...Ecoles));
    let nom = ["Poufsouffle", "Serdaigle", "Serpentard", "Gryffondor"]
    let Emblem = ["img/Emblem_Hufflepuff.png", "img/Emblem_Ravenclaw.png", "img/Emblem_Slytherin.png", "img/Emblem_Gryffindor.png"]
    let nomResult = nom[EcolesResult]
    let EmblemResult = Emblem[EcolesResult]
    console.log(nomResult)
    quizResult.innerHTML = `
        <h2>Vous irez a ...</h2>
        <p class="quizHouse">${nomResult}</p>
        <img src="${EmblemResult}" alt="EmblemResult" class="EmblemResult">
        <button onclick="location.reload()">Reload</button>
        `
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
    quizResult.style.display = "block";
    FinalResult()
} )
answerBtnSerdaigle5.addEventListener('click', ()=>{
    Serdaigle += 2
    console.log("Serdaigle: " + Serdaigle)
    quizQuestion5.style.display = "none";
    quizResult.style.display = "block";
    FinalResult()
} )
answerBtnSerpentard5.addEventListener('click', ()=>{
    Serpentard += 2
    console.log("Serpentard: " + Serpentard)
    quizQuestion5.style.display = "none";
    quizResult.style.display = "block";
    FinalResult()
} )
answerBtnGryffondor5.addEventListener('click', ()=>{
    Gryffondor += 2
    console.log("Gryffondor: " + Gryffondor)
    quizQuestion5.style.display = "none";
    quizResult.style.display = "block";
    FinalResult()
} )


