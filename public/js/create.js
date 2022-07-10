window.onload = function(){

    let segundoAutor = document.querySelector(".segundoAutor")

    let plusicon = document.querySelector(".fa-circle-plus")

    let minusicon = document.querySelector(".fa-circle-minus")

    plusicon.addEventListener("click", function(event){
        plusicon.style.display = "none"
        minusicon.style.display = "block"
        segundoAutor.style.display = "block"
    })

    minusicon.addEventListener("click", function (event) {
        plusicon.style.display = "block"
        minusicon.style.display = "none"
        segundoAutor.style.display = "none"
        
    })




}