let gameBoxes = document.querySelectorAll(".game-box div");
let fullX = document.querySelector(".full-X");
let partX = document.querySelector(".part-X")

//აქ ჩამოვივლი ყველა ყუთზე და ვამოწმებ თუ შვილი ყავს უკვე მაშინ აღარ მომცეს საშუალება რო ჩავსვა ფოტო
let clicked = false;
gameBoxes.forEach(box=>{
    box.addEventListener("click", function(){

        partX.style.display = "none"
        if(box.firstElementChild.style.display = "none"){
            box.firstElementChild.style.display = "block";
            box.lastElementChild.style.display = "none"
        }
    })
    box.addEventListener("mouseenter", function(){ 
       if(box.firstElementChild.style.display = "none"){
        // box.lastElementChild.style.display = "block"   //ეს ნაწილი არ მუშაობს 
        console.log("none")

       }else{
        console.log("block")
        box.lastElementChild.style.display = "none"
        box.setAttribute("disabled", "")
       }
      
    })
    box.addEventListener("mouseleave", function(){
        box.lastElementChild.style.display = "none"
    })
})
//restart-ზე კლიკის დროს რო გამოჩნდეს რესტარტის სექცია
let restartBox = document.querySelector(".restart-box");
let restartSection = document.querySelector("section")

restartBox.addEventListener("click", function(){
    restartSection.classList.add("restart-section")
})

let cancelButton = document.querySelector(".restart-button-box button:first-child")
cancelButton.addEventListener("click", function(){
    restartSection.classList.remove("restart-section")
})