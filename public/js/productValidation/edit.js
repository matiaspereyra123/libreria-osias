window.onload = function(){

    let segundoAutor = document.querySelector(".segundoAutor")

    let plusicon = document.querySelector(".fa-circle-plus")

    let minusicon = document.querySelector(".fa-circle-minus")




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
    let inputIdioma = document.querySelector("#idioma");
    let errorIdioma = document.querySelector("#error-idioma");
    let inputIsbn = document.querySelector("#isbn");
    let errorIsbn = document.querySelector("#error-isbn");
    let inputPrecio = document.querySelector("#precio");
    let errorPrecio = document.querySelector("#error-precio");
    let inputFecha = document.querySelector("#fecha");
    let errorFecha = document.querySelector("#error-fecha");
    let inputCantidad = document.querySelector("#cantidad");
    let errorCantidad = document.querySelector("#error-cantidad");
    let inputPaginas = document.querySelector("#paginas");
    let errorPaginas = document.querySelector("#error-paginas");

    let botonSubmit = document.querySelector(".edit-boton-enviar");
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
        
        else if (inputAuthor.value.length < 5) {
           errorAuthor.innerText = "El nombre y apellido del autor debe tener al menos 5 caracteres";
           inputAuthor.style.border = "2.1px solid #EF5350"
           iconAuthor.classList.add("fa-circle-xmark")
           iconAuthor.style.visibility = "visible"
           iconAuthor.style.color = "#EF5350"
            
        }
        
        else {
            errorAuthor.style.display = "none";
            inputAuthor.style.border = "#19c8a6 2.1px solid";
            iconAuthor.classList.remove("fa-circle-xmark")
            iconAuthor.classList.add("fa-circle-check")
            iconAuthor.style.visibility = "visible"
            iconAuthor.style.color = "#19c8a6"
           
        }
    })



   

    inputPublisher.addEventListener("blur", function(){
        if (inputPublisher.value.length < 1 ) {
           errorPublisher.innerText = "Seleccioná una editorial";
           inputPublisher.style.border = "2.1px solid #EF5350"
           iconPublisher.classList.add("fa-circle-xmark")
           iconPublisher.style.visibility = "visible"
           iconPublisher.style.color = "#EF5350"

        } else {
            errorPublisher.style.display = "none";
            inputPublisher.style.border = "#19c8a6 2.1px solid";
            iconPublisher.classList.remove("fa-circle-xmark")
            iconPublisher.classList.add("fa-circle-check")
            iconPublisher.style.visibility = "visible"
            iconPublisher.style.color = "#19c8a6" 

        }
    })


    inputTitle.addEventListener("blur", function(){
        if (inputTitle.value.length < 1 ) {
           errorTitle.innerText = "Ingresá el título";
           inputTitle.style.border = "2.1px solid #EF5350"
           iconTitle.classList.add("fa-circle-xmark")
           iconTitle.style.visibility = "visible"
           iconTitle.style.color = "#EF5350"
        } else {
            errorTitle.style.display = "none";
            inputTitle.style.border = "#19c8a6 2.1px solid";
            iconTitle.classList.remove("fa-circle-xmark")
            iconTitle.classList.add("fa-circle-check")
            iconTitle.style.visibility = "visible"
            iconTitle.style.color = "#19c8a6"  
            
        }
    })

    
    inputIdioma.addEventListener("blur", function(){
        if (inputIdioma.value.length < 1 ) {
            errorIdioma.innerText = "Ingresá el idioma";
            inputIdioma.style.border = "2.1px solid #EF5350"
            iconIdioma.classList.add("fa-circle-xmark")
            iconIdioma.style.visibility = "visible"
            iconIdioma.style.color = "#EF5350"

            }
        else {

            errorIdioma.style.display = "none";
            inputIdioma.style.border = "#19c8a6 2.1px solid";
            iconIdioma.classList.remove("fa-circle-xmark")
            iconIdioma.classList.add("fa-circle-check")
            iconIdioma.style.visibility = "visible"
            iconIdioma.style.color = "#19c8a6"   
            }
        })

 


    inputGenre.addEventListener("blur", function(){
        if (inputGenre.value.length < 1 ) {
           errorGenre.innerText = "Seleccioná un género";
           inputGenre.style.border = "2.1px solid #EF5350"
           iconGenre.classList.add("fa-circle-xmark")
           iconGenre.style.visibility = "visible"
           iconGenre.style.color = "#EF5350"
        }
        else {

            errorGenre.style.display = "none";
            inputGenre.style.border = "#19c8a6 2.1px solid";
            iconGenre.classList.remove("fa-circle-xmark")
            iconGenre.classList.add("fa-circle-check")
            iconGenre.style.visibility = "visible"
            iconGenre.style.color = "#19c8a6"   
        }
    })

    inputIsbn.addEventListener("blur", function(){
        if (inputIsbn.value.length < 1 ) {
           errorIsbn.innerText = "Ingresá el ISBN";
           inputIsbn.style.border = "2.1px solid #EF5350"
           iconIsbn.classList.add("fa-circle-xmark")
           iconIsbn.style.visibility = "visible"
           iconIsbn.style.color = "#EF5350"
        }
        else {

            errorIsbn.style.display = "none";
            inputIsbn.style.border = "#19c8a6 2.1px solid";
            iconIsbn.classList.remove("fa-circle-xmark")
            iconIsbn.classList.add("fa-circle-check")
            iconIsbn.style.visibility = "visible"
            iconIsbn.style.color = "#19c8a6"   
        }
    })



    inputPrecio.addEventListener("blur", function(){
        if (inputPrecio.value.length < 1 ) {
           errorPrecio.innerText = "Ingresá el precio";
           inputPrecio.style.border = "2.1px solid #EF5350"
           iconPrecio.classList.add("fa-circle-xmark")
           iconPrecio.style.visibility = "visible"
           iconPrecio.style.color = "#EF5350"
        }
        else {

            errorPrecio.style.display = "none";
            inputPrecio.style.border = "#19c8a6 2.1px solid";
            iconPrecio.classList.remove("fa-circle-xmark")
            iconPrecio.classList.add("fa-circle-check")
            iconPrecio.style.visibility = "visible"
            iconPrecio.style.color = "#19c8a6"   
        }
    })


    inputFecha.addEventListener("blur", function(){
        if (inputFecha.value.length < 1 ) {
           errorFecha.innerText = "Ingresá el año de publicación";
           inputFecha.style.border = "2.1px solid #EF5350"
           iconFecha.classList.add("fa-circle-xmark")
           iconFecha.style.visibility = "visible"
           iconFecha.style.color = "#EF5350"
        }
        else {
            errorFecha.style.display = "none";
            inputFecha.style.border = "#19c8a6 2.1px solid";
            iconFecha.classList.remove("fa-circle-xmark")
            iconFecha.classList.add("fa-circle-check")
            iconFecha.style.visibility = "visible"
            iconFecha.style.color = "#19c8a6"   
        }
    })


 

    inputCantidad.addEventListener("blur", function(){
        if (inputCantidad.value.length < 1 ) {
           errorCantidad.innerText = "Ingresá la cantidad";
           inputCantidad.style.border = "2.1px solid #EF5350"
           iconCantidad.classList.add("fa-circle-xmark")
           iconCantidad.style.visibility = "visible"
           iconCantidad.style.color = "#EF5350"
        }
        else {

            errorCantidad.style.display = "none";
            inputCantidad.style.border = "#19c8a6 2.1px solid";
            iconCantidad.classList.remove("fa-circle-xmark")
            iconCantidad.classList.add("fa-circle-check")
            iconCantidad.style.visibility = "visible"
            iconCantidad.style.color = "#19c8a6"   
        }
    })


    inputPaginas.addEventListener("blur", function(){
        if (inputPaginas.value.length < 1 ) {
           errorPaginas.innerText = "Ingresá la cantidad de páginas";
           inputPaginas.style.border = "2.1px solid #EF5350"
           iconPaginas.classList.add("fa-circle-xmark")
           iconPaginas.style.visibility = "visible"
           iconPaginas.style.color = "#EF5350"
        }
        else {

            errorPaginas.style.display = "none";
            inputPaginas.style.border = "#19c8a6 2.1px solid";
            iconPaginas.classList.remove("fa-circle-xmark")
            iconPaginas.classList.add("fa-circle-check")
            iconPaginas.style.visibility = "visible"
            iconPaginas.style.color = "#19c8a6"   
        }
    })

  

    inputImage.addEventListener("blur", function(){
        let extension = file.value.split(".").pop()

        if (extension != "jpg" && extension != "jpeg" && extension != "png" && extension != "gif" ) {
           
           errorImage.innerText = "Las extensiones de archivo permitidas son .jpg, .jpeg, .png, .gif";
           iconImage.classList.add("fa-circle-xmark")
           iconImage.style.visibility = "visible"
           iconImage.style.color = "#EF5350"

        } else {
            errorImage.style.display = "none";
            iconImage.classList.remove("fa-circle-xmark")
            iconImage.classList.add("fa-circle-check")
            iconImage.style.visibility = "visible"
            iconImage.style.color = "#19c8a6" 
        }
    })




    inputDescription.addEventListener("blur", function(){
        if (inputDescription.value.length < 20 ) {
           errorDescription.innerText = "La descripción debe tener al menos 20 caracteres";
           inputDescription.style.border = "2.1px solid #EF5350"
           iconDescription.classList.add("fa-circle-xmark")
           iconDescription.style.visibility = "visible"
           iconDescription.style.color = "#EF5350"
        } else {
            errorDescription.style.display = "none";
            inputDescription.style.border = "#19c8a6 2.1px solid";
            iconDescription.classList.remove("fa-circle-xmark")
            iconDescription.classList.add("fa-circle-check")
            iconDescription.style.visibility = "visible"
            iconDescription.style.color = "#19c8a6"   

        }
    })

    

    botonSubmit.addEventListener("click", function(event){

      
        event.preventDefault();

        let errores = {}

        if (inputAuthor.value.length < 1) {
            errores.author = "Ingresá el nombre y apellido del autor"
        }
        else if (inputAuthor.value.length < 5) {
            errores.author = "El nombre del autor debe tener al menos 5 caracteres"
        }

        if (inputPublisher.value.length < 1) {
            errores.publisher = "Seleccioná la editorial"
        }
        
        if (inputTitle.value.length < 1) {
            errores.title = "Ingresá el título"
        }
        
        if (inputGenre.value < 1) {
            errores.genre = "Debés seleccionar un género"
        }

        if (inputIdioma.value < 1) {
            errores.idioma = "Ingresá el idioma"
        }

        if (inputIsbn.value < 1) {
            errores.isbn = "Ingresá el ISBN"
        }

        if (inputPrecio.value < 1) {
            errores.precio = "Ingresá el precio"
        }
        
        if (inputFecha.value < 1) {
            errores.fecha = "Ingresá el año de publicación"
        }

        if (inputCantidad.value < 1) {
            errores.cantidad = "Ingresá la cantidad"
        }


        if (inputPaginas.value < 1) {
            errores.paginas = "Ingresá la cantidad de páginas"
        }


       
        // let extension = file.value.split(".").pop()
  
        // if (extension != "jpg" && extension != "jpeg" && extension != "png" && extension != "gif") {
           
        //       errores.image = "Las extensiones de archivo permitidas son .jpg, .jpeg, .png, .gif"
        //     }
        

        if (inputDescription.value.length < 20) {
            errores.description = "La descripción debe tener al menos 20 caracteres"
        }
        


        if (Object.keys(errores).length >=1) {


            errorAuthor.innerText = (errores.author) ? errores.author: "";
            errorTitle.innerText = (errores.title) ? errores.title: "";
            errorPublisher.innerText = (errores.publisher) ? errores.publisher: "";
            errorGenre.innerText = (errores.genre) ? errores.genre: "";
            errorIdioma.innerText = (errores.idioma) ? errores.idioma: "";
            errorIsbn.innerText = (errores.isbn) ? errores.isbn: "";
            errorPrecio.innerText = (errores.precio) ? errores.precio: "";
            errorFecha.innerText = (errores.fecha) ? errores.fecha: "";
            errorCantidad.innerText = (errores.cantidad) ? errores.cantidad: "";
            errorPaginas.innerText = (errores.paginas) ? errores.paginas: "";
            // errorImage.innerText = (errores.image) ? errores.image: "";
            errorDescription.innerText = (errores.description) ? errores.description: "";


        } else {
            form.submit();
            
        }

      

    })


}





