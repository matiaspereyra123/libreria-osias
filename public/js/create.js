

window.onload = function(){

    let segundoAutor = document.querySelector(".segundoAutor");
    let plusicon = document.querySelector(".fa-circle-plus");
    let minusicon = document.querySelector(".fa-circle-minus");

    let inputAuthor = document.querySelector("#author");
    let errorAuthor = document.querySelector("#error-author");
    let inputPublisher = document.querySelector("#publisher");
    let errorPublisher = document.querySelector("#error-publisher");
    let inputTitle = document.querySelector("#titulo");
    let errorTitle = document.querySelector("#error-title");
    let inputGenre = document.querySelector("#genero");
    let errorGenre = document.querySelector("#error-genre");
    let inputImage = document.querySelector("#imagen");
    let errorImage = document.querySelector("#error-image");
    let inputDescription = document.querySelector("#descripcion");
    let errorDescription = document.querySelector("#error-description");


    let probando =document.querySelector(".probando");

 



    
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
           errorAuthor.innerText = "Ingresá el nombre y apellido del autor";
           inputAuthor.style.border = "2.1px solid #EF5350"
           iconAuthor.classList.add("fa-circle-xmark")
           iconAuthor.style.visibility = "visible"
           iconAuthor.style.color = "#EF5350"
        }
    })

    inputAuthor.addEventListener("change", function () {
        errorAuthor.style.display = "none";
        inputAuthor.style.border = "#19c8a6 2.1px solid";
        iconAuthor.classList.remove("fa-circle-xmark")
        iconAuthor.classList.add("fa-circle-check")
        iconAuthor.style.visibility = "visible"
        iconAuthor.style.color = "#19c8a6"   
    })

    inputPublisher.addEventListener("blur", function(){
        if (inputPublisher.value.length < 1 ) {
           errorPublisher.innerText = "Ingresá el nombre y apellido del autor";
           inputPublisher.style.border = "2.1px solid #EF5350"
           iconPublisher.classList.add("fa-circle-xmark")
           iconPublisher.style.visibility = "visible"
           iconPublisher.style.color = "#EF5350"
        }
    })

    inputPublisher.addEventListener("change", function () {
        errorPublisher.style.display = "none";
        inputPublisher.style.border = "#19c8a6 2.1px solid";
        iconPublisher.classList.remove("fa-circle-xmark")
        iconPublisher.classList.add("fa-circle-check")
        iconPublisher.style.visibility = "visible"
        iconPublisher.style.color = "#19c8a6"   
    })


    inputTitle.addEventListener("blur", function(){
        if (inputTitle.value.length < 1 ) {
            if( !locals.errors && !errors.titulo ){
           probando.style.display="none";
            }
                errorTitle.innerText = "Ingresá el título";
           inputTitle.style.border = "2.1px solid #EF5350"
           iconTitle.classList.remove("fa-circle-check");
           iconTitle.classList.add("fa-circle-xmark")
           iconTitle.style.visibility = "visible"
           iconTitle.style.color = "#EF5350"

        }else{
            errorTitle.style.display = "none";
            inputTitle.style.border = "#19c8a6 2.1px solid";
            iconTitle.classList.remove("fa-circle-xmark")
            iconTitle.classList.add("fa-circle-check")
            iconTitle.style.visibility = "visible"
            iconTitle.style.color = "#19c8a6"   
           
        }
    })

/*     inputTitle.addEventListener("change", function () {
        errorTitle.style.display = "none";
        inputTitle.style.border = "#19c8a6 2.1px solid";
        iconTitle.classList.remove("fa-circle-xmark")
        iconTitle.classList.add("fa-circle-check")
        iconTitle.style.visibility = "visible"
        iconTitle.style.color = "#19c8a6"   
    }) */

    inputGenre.addEventListener("blur", function(){
        if (inputGenre.value.length < 1 ) {
           errorGenre.innerText = "Debés seleccionar un género";
           inputGenre.style.border = "2.1px solid #EF5350"
           iconGenre.classList.add("fa-circle-xmark")
           iconGenre.style.visibility = "visible"
           iconGenre.style.color = "#EF5350"
        }
    })

    inputGenre.addEventListener("change", function () {
        errorGenre.style.display = "none";
        inputGenre.style.border = "#19c8a6 2.1px solid";
        iconGenre.classList.remove("fa-circle-xmark")
        iconGenre.classList.add("fa-circle-check")
        iconGenre.style.visibility = "visible"
        iconGenre.style.color = "#19c8a6"   
    })

    inputImage.addEventListener("blur", function(){
        if (inputGenre.value.length < 1 ) {
           errorImage.innerText = "Las extensiones de archivo permitidas son .jpg, .jpeg, .png, .gif";
           iconImage.classList.add("fa-circle-xmark")
           iconImage.style.visibility = "visible"
           iconImage.style.color = "#EF5350"
        }
    })

    inputImage.addEventListener("change", function () {
        errorImage.style.display = "none";
        iconImage.classList.remove("fa-circle-xmark")
        iconImage.classList.add("fa-circle-check")
        iconImage.style.visibility = "visible"
        iconImage.style.color = "#19c8a6"   
    })



    inputDescription.addEventListener("blur", function(){
        if (inputDescription.value.length < 20 ) {
           errorDescription.innerText = "La descripción debe tener al menos 20 caracteres";
           inputDescription.style.border = "2.1px solid #EF5350"
           iconDescription.classList.add("fa-circle-xmark")
           iconDescription.style.visibility = "visible"
           iconDescription.style.color = "#EF5350"
        }
    })

    inputDescription.addEventListener("change", function () {
        errorDescription.style.display = "none";
        inputDescription.style.border = "#19c8a6 2.1px solid";
        iconDescription.classList.remove("fa-circle-xmark")
        iconDescription.classList.add("fa-circle-check")
        iconDescription.style.visibility = "visible"
        iconDescription.style.color = "#19c8a6"   
    })

    

    botonSubmit.addEventListener("click", function(event){



        let errores = {}
        if (inputAuthor.value.length < 1) {
            errores.author = "Ingresá el nombre y apellido del autor"
        }
        else if (inputAuthor.value.length < 5) {
            errores.author = "El nombre del autor debe tener al menos 5 caracteres"
        }

        if (inputTitle.value.length < 1) {
            errores.title = "Ingresá el título"
        }
        
        if (inputGenre.value < 1) {
            errores.genre = "Debés seleccionar un género"
        }

       
        let extension = file.value.split(".").pop()
  
        if (extension != "jpg" && extension != "jpeg" && extension != "png" && extension != "gif") {
           
              errores.image = "Las extensiones de archivo permitidas son .jpg, .jpeg, .png, .gif"
            }
        
      

        if (inputDescription.value.length < 20) {
            errores.description = "La descripción debe tener al menos 20 caracteres"
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