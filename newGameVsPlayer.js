let gameBoxes = document.querySelectorAll(".game-box div");
let fullX = document.querySelector(".full-X");
let partX = document.querySelector(".part-X");
let fullO = document.querySelector(".full-O");
let partO = document.querySelector(".part-O");
let Xturn = document.querySelector(".X-turn");
let Oturn = document.querySelector(".O-turn");
let nextRoundButton = document.querySelector(".next")
let whoTakesRound = document.querySelector(".who-takes-round");
let winnerX = document.querySelector(".win-X");
let winnerO = document.querySelector(".win-O");
let winnerPlayer = document.querySelector(".who-takes-round span")
let p2Score =document.querySelector(".p2-score")
let p1Score = document.querySelector(".p1-score")
let ties = document.querySelector(".who-takes-round h1")
let winner = document.querySelector(".winner");
let winnerInfo =document.querySelector(".who-takes-round p");
let takesTheRound = document.querySelector(".winner h2");
let tiesScore = document.querySelector(".ties")
//აქ ჩამოვივლი ყველა ყუთზე და რომელსაც დავაკლიკებ იმაზე ჩნდება x ნიშანი,ხოლო მეორე ნიშანი რომელიც მაუსის მიტანაზე ჩნდება, კლიკზე ქრება.
let clicked = false;
let clickCounter = 1;
let p2WinScore = 0;
let p1WinScore = 0;
let tiesWinScore = 0;
gameBoxes.forEach(box=>{
    clickBox(box)
    hoverBox(box)
    startNextRound(box)
})

function clickBox(box){
    box.addEventListener("click", function(){
        console.log(clickCounter)
        box.lastElementChild.style.display = "none"
        if(!box.clicked && clickCounter % 2 !== 0){
            box.firstElementChild.style.display = "block";
            Oturn.style.display = "block";
            Xturn.style.display = "none";
            box.lastElementChild.style.display = "none";
            clickCounter++;
            if((gameBoxes[0].querySelector(".full-X").style.display == "block" && gameBoxes[1].querySelector(".full-X").style.display == "block" && gameBoxes[2].querySelector(".full-X").style.display == "block") || (gameBoxes[0].querySelector(".full-X").style.display == "block" && gameBoxes[3].querySelector(".full-X").style.display == "block" && gameBoxes[6].querySelector(".full-X").style.display == "block") ||
            (gameBoxes[0].querySelector(".full-X").style.display == "block" && gameBoxes[4].querySelector(".full-X").style.display == "block" && gameBoxes[8].querySelector(".full-X").style.display == "block") ||
            (gameBoxes[1].querySelector(".full-X").style.display == "block" && gameBoxes[4].querySelector(".full-X").style.display == "block" && gameBoxes[7].querySelector(".full-X").style.display == "block") ||
            (gameBoxes[2].querySelector(".full-X").style.display == "block" && gameBoxes[4].querySelector(".full-X").style.display == "block" && gameBoxes[6].querySelector(".full-X").style.display == "block") ||
            (gameBoxes[2].querySelector(".full-X").style.display == "block" && gameBoxes[5].querySelector(".full-X").style.display == "block" && gameBoxes[8].querySelector(".full-X").style.display == "block") ||
            (gameBoxes[3].querySelector(".full-X").style.display == "block" && gameBoxes[4].querySelector(".full-X").style.display == "block" && gameBoxes[5].querySelector(".full-X").style.display == "block") ||
            (gameBoxes[6].querySelector(".full-X").style.display == "block" && gameBoxes[7].querySelector(".full-X").style.display == "block" && gameBoxes[8].querySelector(".full-X").style.display == "block")){
                whoTakesRound.style.display = "flex";
                winnerX.style.display = "block";
                winnerO.style.display = "none";
                p2WinScore++;
                p2Score.innerHTML = p2WinScore;
                clickCounter = 1;
                winnerPlayer.innerHTML = "2"
                
            }else if(clickCounter > 9){
                ties.style.display = "block";
                whoTakesRound.style.display = "flex";
                winner.style.display = "none"
                winnerInfo.style.display = "none";
                clickCounter = 1;
                tiesWinScore++;
                tiesScore.innerHTML = tiesWinScore;
            }
            
        }else if(!box.clicked && clickCounter % 2 === 0){
            box.querySelector(".full-O").style.display = "block";
            Oturn.style.display = "none";
            Xturn.style.display = "block";      
            box.querySelector(".part-O").style.display = "none";
            clickCounter++;
            if((gameBoxes[0].querySelector(".full-O").style.display == "block" && gameBoxes[1].querySelector(".full-O").style.display == "block" && gameBoxes[2].querySelector(".full-O").style.display == "block") ||
            (gameBoxes[0].querySelector(".full-O").style.display == "block" && gameBoxes[3].querySelector(".full-O").style.display == "block" && gameBoxes[6].querySelector(".full-O").style.display == "block") ||
            (gameBoxes[0].querySelector(".full-O").style.display == "block" && gameBoxes[4].querySelector(".full-O").style.display == "block" && gameBoxes[8].querySelector(".full-O").style.display == "block") ||
            (gameBoxes[1].querySelector(".full-O").style.display == "block" && gameBoxes[4].querySelector(".full-O").style.display == "block" && gameBoxes[7].querySelector(".full-O").style.display == "block") ||
            (gameBoxes[2].querySelector(".full-O").style.display == "block" && gameBoxes[4].querySelector(".full-O").style.display == "block" && gameBoxes[6].querySelector(".full-O").style.display == "block") ||
            (gameBoxes[2].querySelector(".full-O").style.display == "block" && gameBoxes[5].querySelector(".full-O").style.display == "block" && gameBoxes[8].querySelector(".full-O").style.display == "block") ||
            (gameBoxes[3].querySelector(".full-O").style.display == "block" && gameBoxes[4].querySelector(".full-O").style.display == "block" && gameBoxes[5].querySelector(".full-O").style.display == "block") ||
            (gameBoxes[6].querySelector(".full-O").style.display == "block" && gameBoxes[7].querySelector(".full-O").style.display == "block" && gameBoxes[8].querySelector(".full-O").style.display == "block")){
                whoTakesRound.style.display = "flex";
                winnerO.style.display = "block";
                winnerX.style.display = "none";
                p1WinScore++;
                p1Score.innerHTML = p1WinScore;
                clickCounter = 1;
                winnerPlayer.innerHTML = "1"
                takesTheRound.style.color = "#F2B137"
            }else if(clickCounter > 9){
                whoTakesRound.style.display = "flex";
                ties.style.display = "block";
                winner.style.display = "none";
                winnerInfo.style.display = "none"
                clickCounter = 1;
                tiesWinScore++;
                tiesScore.innerHTML = tiesWinScore;
               
            }
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

let nextA = document.querySelector(".next-A")
function startNextRound(box){
        nextRoundButton.addEventListener("click", function(){
            box.clicked = false;
            whoTakesRound.style.display = "none";
            box.querySelector(".full-O").style.display = "none"; 
            box.querySelector(".full-X").style.display = "none";   
        })
    
    
}


