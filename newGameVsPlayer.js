let gameBoxes = document.querySelectorAll(".game-box div");
let fullX = document.querySelector(".full-X");
let partX = document.querySelector(".part-X")

//აქ ჩამოვივლი ყველა ყუთზე და რომელსაც დავაკლიკებ იმაზე ჩნდება x ნიშანი,ხოლო მეორე ნიშანი რომელიც მაუსის მიტანაზე ჩნდება, კლიკზე ქრება.
let clicked = false;
gameBoxes.forEach(box=>{
    box.addEventListener("click", function(){
        box.lastElementChild.style.display = "none"
        if(box.firstElementChild.style.display = "none"){
            box.firstElementChild.style.display = "block";
            box.lastElementChild.style.display = "none" 
        }
        box.clicked = true;
    })
    box.addEventListener("mouseenter", function(){ 
        if(!box.clicked){
            box.lastElementChild.style.display = "block";
            box.style.cursor = "pointer"
        }else if(box.clicked){
            box.lastElementChild.style.display = "none";
            box.style.cursor = "default"
        }
    })
    box.addEventListener("mouseleave", function(){
        box.lastElementChild.style.display = "none"
    })
})
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