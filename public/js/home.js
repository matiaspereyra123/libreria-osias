window.onload = function(){

    let bar = document.querySelector(".search-bar")
    
    let input = document.querySelector(".search-bar__input")
    
    icon = document.querySelector(".fa-search")

    let catalogo = document.querySelector(".catalogo")

    let dropdown = document.querySelector(".menu-dropdown")
    
    hero = document.querySelector("hero")
    
    
    input.addEventListener("focus", function(){
        icon.style.color = "#c53758"
    
    })
    
    input.addEventListener("blur", function(){
        icon.style.color = "white"
    
    })

    catalogo.addEventListener("mouseover", function(){
        dropdown.style.display = "block"
    })
    
    dropdown.addEventListener("mouseout", function(){
        dropdown.style.display = "none"
    })
    
    
    
    }