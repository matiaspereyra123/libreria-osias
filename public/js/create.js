window.onload = function(){

    let segundoAutor = document.querySelector(".segundoAutor");
    let plusicon = document.querySelector(".fa-circle-plus");
    let minusicon = document.querySelector(".fa-circle-minus");

    let inputAuthor = document.querySelector("#author");
    let errorAuthor = document.querySelector("#error-author");
    let inputTitle = document.querySelector("#titulo");
    let errorTitle = document.querySelector("#error-title");
    let inputGenre = document.querySelector("#genero");
    let errorGenre = document.querySelector("#error-genre");
    let inputImage = document.querySelector("#imagen");
    let errorImage = document.querySelector("#error-image");
    let inputDescription = document.querySelector("#descripcion");
    let errorDescription = document.querySelector("#error-description");


    
    let botonSubmit = document.querySelector(".boton-enviar");
    let form = document.querySelector(".formulario-completo");
    



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


    inputAuthor.addEventListener("blur", function(){
        if (inputAuthor.value.length < 1 ) {
           errorAuthor.innerText = "Debés completar el campo de autor";
           inputAuthor.style.backgroundColor = "lightpink" 

        }
    })

    inputAuthor.addEventListener("change", function () {
        errorAuthor.style.display = "none";
        inputAuthor.style.backgroundColor = "white"
        inputAuthor.style.border = "limegreen solid 1px"   
    })

    botonSubmit.addEventListener("click", function(event){
        event.preventDefault();

        let errores = {}
        if (inputAuthor.value.length < 1) {
            errores.author = "El campo de autor debe estar completo"
        }
        else if (inputAuthor.value.length < 5) {
            errores.author = "El campo de autor debe tener al menos 5 caracteres"
        }

        if (inputTitle.value.length < 1) {
            errores.title = "El campo de título debe estar completo"
        }
        
        if (inputGenre.value < 1) {
            errores.genre = "Debés seleccionar un género"
        }

        //Revisar 
        if (inputImage.value.filename != ".jpg") {
            errores.image = "La imagen debe ser un archivo JPG, JPEG, PNG, GIF"
        }

        if (inputDescription.value.length < 20) {
            errores.description = "La descripción debe incluir al menos 20 caracteres"
        }


        if (Object.keys(errores).length >=1) {
            errorAuthor.innerText = (errores.author) ? errores.author: "";
            errorTitle.innerText = (errores.title) ? errores.title: "";
            errorGenre.innerText = (errores.genre) ? errores.genre: "";
            errorImage.innerText = (errores.image) ? errores.image: "";
            errorDescription.innerText = (errores.description) ? errores.description: "";

        } else {
            form.submit();
            
        }

      

    })





}