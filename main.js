let x = document.querySelector(".x");
let o = document.querySelector(".o");
let xPath = document.querySelector(".x path")
let oPath = document.querySelector(".o path")

let xClicked = false;
let oClicked = false;
// აქ x da o -ზე კლიკის დროს ფერებს ვცვლი

x.addEventListener("click", function(){
    xClicked = true;
    x.style.backgroundColor = "#A8BFC9";
    xPath.setAttribute("fill", "#1A2A33");

    o.style.backgroundColor = "#1A2A33";
    oPath.setAttribute("fill", "#A8BFC9")
    
})
o.addEventListener("click", function(){
    oClicked = true;
    o.style.backgroundColor = "#A8BFC9";
    oPath.setAttribute("fill", "#1A2A33") 

    x.style.backgroundColor = "#1A2A33";
    xPath.setAttribute("fill", "#A8BFC9");
})

let newGameButton = document.querySelector(".info-box a");
newGameButton.addEventListener("click", function(){
    if(xClicked){
        newGameButton.setAttribute("href", "./newGameVsCpu.html")
    }else if(oClicked) {
        newGameButton.setAttribute("href", "./newGameVsCpu.html")
    }else{
        newGameButton.setAttribute("disabled", "")
    }
    
})
let vsCpuButton = document.querySelector(".vs-cpu");
// vsCpuButton.addEventListener("mouseover", function(){
//     vsCpuButton.style.backgroundColor = "#FFC860"
// })