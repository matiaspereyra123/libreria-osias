window.onload = function(){



    let inputNombre = document.querySelector("#nombre");
    let errorNombre = document.querySelector("#error-nombre");
    let inputApellido = document.querySelector("#apellido");
    let errorApellido = document.querySelector("#error-apellido");
    let inputEmail = document.querySelector("#email");
    let errorEmail = document.querySelector("#error-email");
    let inputDni = document.querySelector("#dni");
    let errorDni = document.querySelector("#error-dni");
    let inputImagen = document.querySelector("#imagen");
    let errorImagen = document.querySelector("#error-imagen");
    let inputPass = document.querySelector("#password");
    let errorPass = document.querySelector("#error-password");
    let inputPass2 = document.querySelector("#password2");
    let errorPass2 = document.querySelector("#error-password2");

    let botonSubmit = document.querySelector(".boton-enviar")
    let formulario = document.querySelector(".formulario-completo")

    inputNombre.addEventListener("blur", function(){

        if (inputNombre.value.length < 1 ) {
            errorNombre.innerText = "Ingresá tu nombre";
            inputNombre.style.border = "2.1px solid #EF5350"
            iconNombre.classList.add("fa-circle-xmark")
            iconNombre.style.visibility = "visible"
            iconNombre.style.color = "#EF5350"
         } 
         
         else if (inputNombre.value.length < 5) {
            errorNombre.innerText = "El nombre debe tener al menos 5 caracteres";
            inputNombre.style.border = "2.1px solid #EF5350"
            iconNombre.classList.add("fa-circle-xmark")
            iconNombre.style.visibility = "visible"
            iconNombre.style.color = "#EF5350"
             
         }
         
         else {
             errorNombre.style.display = "none";
             inputNombre.style.border = "#19c8a6 2.1px solid";
             iconNombre.classList.remove("fa-circle-xmark")
             iconNombre.classList.add("fa-circle-check")
             iconNombre.style.visibility = "visible"
             iconNombre.style.color = "#19c8a6"
            
         }
        })


         inputApellido.addEventListener("blur", function(){

            if (inputApellido.value.length < 1 ) {
                errorApellido.innerText = "Ingresá tu apellido";
                inputApellido.style.border = "2.1px solid #EF5350"
                iconApellido.classList.add("fa-circle-xmark")
                iconApellido.style.visibility = "visible"
                iconApellido.style.color = "#EF5350"
             } 

             else if (inputApellido.value.length < 5) {
                errorApellido.innerText = "El apellido debe tener al menos 5 caracteres";
                inputApellido.style.border = "2.1px solid #EF5350"
                iconApellido.classList.add("fa-circle-xmark")
                iconApellido.style.visibility = "visible"
                iconApellido.style.color = "#EF5350"
                 
             }

             else {
                errorApellido.style.display = "none";
                inputApellido.style.border = "#19c8a6 2.1px solid";
                iconApellido.classList.remove("fa-circle-xmark")
                iconApellido.classList.add("fa-circle-check")
                iconApellido.style.visibility = "visible"
                iconApellido.style.color = "#19c8a6"
               
            }})

            inputEmail.addEventListener("blur", function(){
                if (inputEmail.value.length < 1 ) {
                    errorEmail.innerText = "Ingresá tu email";
                    inputEmail.style.border = "2.1px solid #EF5350"
                    iconEmail.classList.add("fa-circle-xmark")
                    iconEmail.style.visibility = "visible"
                    iconEmail.style.color = "#EF5350"
                 }
                 
                 //No funciona
                 else if (inputEmail.value != /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
                 ) {
                    errorEmail.innerText = "Ingresá un email válido";
                    inputEmail.style.border = "2.1px solid #EF5350"
                    iconEmail.classList.add("fa-circle-xmark")
                    iconEmail.style.visibility = "visible"
                    iconEmail.style.color = "#EF5350"
                 }

                 //falta otro else if para comprobar si el email ya está registrado

                 else {

                    errorEmail.style.display = "none";
                    inputEmail.style.border = "#19c8a6 2.1px solid";
                    iconEmail.classList.remove("fa-circle-xmark")
                    iconEmail.classList.add("fa-circle-check")
                    iconEmail.style.visibility = "visible"
                    iconEmail.style.color = "#19c8a6"

                 }
                 

                 inputDni.addEventListener("blur", function(){

                    if (inputDni.value.length < 1 ) {
                        errorDni.innerText = "Ingresá tu DNI";
                        inputDni.style.border = "2.1px solid #EF5350"
                        iconDni.classList.add("fa-circle-xmark")
                        iconDni.style.visibility = "visible"
                        iconDni.style.color = "#EF5350"
                     } 

                     else {

                        errorDni.style.display = "none";
                        inputDni.style.border = "#19c8a6 2.1px solid";
                        iconDni.classList.remove("fa-circle-xmark")
                        iconDni.classList.add("fa-circle-check")
                        iconDni.style.visibility = "visible"
                        iconDni.style.color = "#19c8a6"
    
                     }
                     inputImagen.addEventListener("blur", function(){
                        let extension = file.value.split(".").pop()
                
                        if (extension != "jpg" && extension != "jpeg" && extension != "png" && extension != "gif" ) {
                           
                           errorImagen.innerText = "Las extensiones de archivo permitidas son .jpg, .jpeg, .png, .gif";
                           iconImagen.classList.add("fa-circle-xmark")
                           iconImagen.style.visibility = "visible"
                           iconImagen.style.color = "#EF5350"
                
                        } else {
                            errorImagen.style.display = "none";
                            iconImagen.classList.remove("fa-circle-xmark")
                            iconImagen.classList.add("fa-circle-check")
                            iconImagen.style.visibility = "visible"
                            iconImagen.style.color = "#19c8a6" 
                        }
                    })
        


                 })



    

            })



   













}