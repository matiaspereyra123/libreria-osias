window.onload = function(){

    let bar = document.querySelector(".search-bar")
    
    let input = document.querySelector(".search-bar__input")
    
    icon = document.querySelector(".fa-search")
    
    hero = document.querySelector("hero")
    
    
    input.addEventListener("focus", function(){
        icon.style.color = "#c53758"
    
    })
    
    input.addEventListener("blur", function(){
        icon.style.color = "white"
    
    })
    
    
    
    }