let x = document.querySelector(".x");
let o = document.querySelector(".o");
let xPath = document.querySelector(".x path")
let oPath = document.querySelector(".o path")
let newGameButton = document.querySelector(".info-box a");
let vsCpuButton = document.querySelector(".vs-cpu");
let vsPlayerButton = document.querySelector(".vs-player")
let vsCpuA = document.querySelector(".vs-cpu-a");
let vsPlayerA = document.querySelector(".vs-player-a")
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
//ამ ღილაკებზე კლიკის დროს ვამოწმებ თუ მოთამაშემ უკვე აირჩია ნიშანი მაშინ შესაბამის გვერდზე გადავიდეს
vsCpuButton.addEventListener("click", function(){
    if(xClicked || oClicked){
        vsCpuA.setAttribute("href", "./newGameVsCpu.html")
        console.log("dasda")
    }else{
        vsCpuButton.setAttribute("disabled", "")
    }
})
vsPlayerButton.addEventListener("click", function(){
    if(xClicked || oClicked){
        vsPlayerA.setAttribute("href", "./newGameVsPlayer.html")
    }else{
        vsPlayerButton.setAttribute("disabled", "")
    }
})