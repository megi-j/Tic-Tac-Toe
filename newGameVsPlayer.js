let gameBoxes = document.querySelectorAll(".game-box div");
let fullX = document.querySelector(".full-X");
let partX = document.querySelector(".part-X");
let fullO = document.querySelector(".full-O");
let partO = document.querySelector(".part-O");
let Xturn = document.querySelector(".X-turn");
let Oturn = document.querySelector(".O-turn");
//აქ ჩამოვივლი ყველა ყუთზე და რომელსაც დავაკლიკებ იმაზე ჩნდება x ნიშანი,ხოლო მეორე ნიშანი რომელიც მაუსის მიტანაზე ჩნდება, კლიკზე ქრება.
let clicked = false;
let clickCounter = 1;
gameBoxes.forEach(box=>{
    clickBox(box)
    hoverBox(box)
  
})

function clickBox(box){
    box.addEventListener("click", function(){
        box.lastElementChild.style.display = "none"
        if(!box.clicked && clickCounter % 2 != 0){
            box.firstElementChild.style.display = "block";
            Oturn.style.display = "block";
            Xturn.style.display = "none"
            clickCounter++;
            box.lastElementChild.style.display = "none" 
        }else if(!box.clicked && clickCounter % 2 === 0){
            box.querySelector(".full-O").style.display = "block";
            Oturn.style.display = "none";
            Xturn.style.display = "block"
            clickCounter++;
            box.querySelector(".part-O").style.display = "none"
        }else if(box.clicked){
            box.setAttribute("disabled", true)
        }
        box.clicked = true;
    })
}

function hoverBox(box){
    box.addEventListener("mouseenter", function(){ 
        if(!box.clicked && clickCounter % 2 != 0){
            box.lastElementChild.style.display = "block";
            box.style.cursor = "pointer"
        }else if(!box.clicked && clickCounter % 2 === 0){
            box.querySelector(".part-O").style.display = "block";
            box.style.cursor = "pointer"
        }else if(box.clicked){
            box.lastElementChild.style.display = "none";
            box.style.cursor = "default"
        }
    })
    box.addEventListener("mouseleave", function(){
        box.lastElementChild.style.display = "none";
        box.querySelector(".part-O").style.display = "none"
    })
}
//restart-ზე კლიკის დროს რო გამოჩნდეს რესტარტის სექცია
let restartBox = document.querySelector(".restart-box");
let restartSection = document.querySelector("section")
let cancelButton = document.querySelector(".restart-button-box button:first-child")
let restartButton = document.querySelector(".restart-button-box button:last-child")
let restartButtonA = document.querySelector(".restart-A")
restartBox.addEventListener("click", function(){
    restartSection.classList.add("restart-section")
})

cancelButton.addEventListener("click", function(){
    restartSection.classList.remove("restart-section")
})

restartButton.addEventListener("click", function(){
    restartButtonA.setAttribute("href", "./index.html")
})

