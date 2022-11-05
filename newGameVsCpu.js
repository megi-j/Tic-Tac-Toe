let gameBoxes = document.querySelectorAll(".game-box div");
//აქ ჩამოვივლი ყველა ყუთზე და ვამოწმებ თუ შვილი ყავს უკვე მაშინ აღარ მომცეს საშუალება რო ჩავსვა ფოტო
gameBoxes.forEach(box=>{
    box.addEventListener("click", function(){
        if(box.children.length > 0){
            box.setAttribute("disabled", "")
        }else{
            let gameSign = document.createElement("img");
            box.appendChild(gameSign)
            gameSign.setAttribute("src", "./images/icon-x.svg")
            
        }
        
    })
    box.addEventListener("mousemove", function(){ 
        if(box.children.length > 0){
            box.style.cursor = "default" 
        }else{
            box.style.cursor = "pointer" 
            
        }
    })
})

let restartBox = document.querySelector(".restart-box");
let restartSection = document.querySelector("section")

restartBox.addEventListener("click", function(){
    restartSection.classList.add("restart-section")
})

let cancelButton = document.querySelector(".restart-button-box button:first-child")
cancelButton.addEventListener("click", function(){
    restartSection.classList.remove("restart-section")
})