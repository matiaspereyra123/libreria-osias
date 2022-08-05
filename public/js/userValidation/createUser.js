window.addEventListener('DOMContentLoaded', (event)=>{
  
        regularExp = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
        let inputNombre = document.querySelector("#nombre");
        let errorNombre = document.querySelector("#error-nombre");
        let inputApellido = document.querySelector("#apellido");
        let errorApellido = document.querySelector("#error-apellido");
        let inputEmail = document.querySelector("#email");
        let errorEmail = document.querySelector("#error-email");
        let inputDni = document.querySelector("#dni");
        let errorDni = document.querySelector("#error-dni");
        let inputNacimiento = document.querySelector("#nacimiento");
        let errorNacimiento = document.querySelector("#error-nacimiento");
        let inputImagen = document.querySelector("#imagen");
        let errorImagen = document.querySelector("#error-imagen");
        let inputPass = document.querySelector("#password");
        let errorPass = document.querySelector("#error-password");
        let inputPass2 = document.querySelector("#password2");
        let errorPass2 = document.querySelector("#error-password2");
    
        let botonSubmit = document.querySelector(".boton-enviar")
        let form = document.querySelector(".formulario-completo")
        let samePass=document.getElementById('samePass');
    
    
    
        inputNombre.addEventListener("blur", function () {
    
            if (inputNombre.value.length < 1) {
                errorNombre.style.display = "block"
                errorNombre.innerText = "Ingresá tu nombre";
                inputNombre.style.border = "2.1px solid #EF5350"
                iconNombre.classList.add("fa-circle-xmark")
                iconNombre.style.visibility = "visible"
                iconNombre.style.color = "#EF5350"
            }
    
            else if (inputNombre.value.length < 2) {
                errorNombre.style.display = "block"
                errorNombre.innerText = "El nombre debe tener al menos 2 caracteres";
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
    
    
        inputApellido.addEventListener("blur", function () {
    
            if (inputApellido.value.length < 1) {
                errorApellido.style.display = "block"
                errorApellido.innerText = "Ingresá tu apellido";
                inputApellido.style.border = "2.1px solid #EF5350"
                iconApellido.classList.add("fa-circle-xmark")
                iconApellido.style.visibility = "visible"
                iconApellido.style.color = "#EF5350"
            }
    
            else if (inputApellido.value.length < 2) {
                errorApellido.style.display = "block"
                errorApellido.innerText = "El apellido debe tener al menos 2 caracteres";
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
    
            }
        })
    
        inputEmail.addEventListener("blur",function(e){
            validarCorreo()
            console.log(inputEmail.value);
        /*     let email=inputEmail.value;
        loadUsers(email); */
        
        })
        
          async function loadUsers(campo){
            const response =await fetch(`http://localhost:3030/api/users/search?keyword=${campo}`);
            const data = await response.json()
            console.log(data);
            if(data.status==200){
                console.log("EL EMAIL INGRESADO SE ENCUENTRA REGISTRADO");
                errorEmail.innerHTML = "Este correo electrónico ya se encuentra registrado";
               errorEmail.style.display = "block";
                errorEmail.classList.add('is-invalid');
                inputEmail.style.border = "2.1px solid #EF5350";
                iconEmail.classList.remove('fa-circle-check');
                iconEmail.classList.add('fa-circle-xmark');
                iconEmail.style.visibility = "visible";
                iconEmail.style.color = "#EF5350"; 
            }
            
          }
        
        
            const validarCorreo = () => {
                expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
         
                if (inputEmail.value < 1) {
                    errorEmail.innerHTML = "Ingresá el correo electrónico";
                    errorEmail.style.display = "block";
                    errorEmail.classList.add('is-invalid');
                    inputEmail.style.border = "2.1px solid #EF5350";
                    iconEmail.classList.remove('fa-circle-check');
                    iconEmail.classList.add('fa-circle-xmark');
                    iconEmail.style.visibility = "visible";
                    iconEmail.style.color = "#EF5350";
        
        
                }
        
                else if (!(inputEmail.value.match(expReg))) {
                    errorEmail.innerHTML = "El correo electrónico no es válido";
                    errorEmail.style.display = "block";
                    errorEmail.classList.add('is-invalid');
                    inputEmail.style.border = "2.1px solid #EF5350";
                    iconEmail.classList.remove('fa-circle-check');
                    iconEmail.classList.add('fa-circle-xmark');
                    iconEmail.style.visibility = "visible";
                    iconEmail.style.color = "#EF5350";
        
        
                } else {
                    let email=inputEmail.value;
                    loadUsers(email);
                    inputEmail.style.border = "2.1px solid #19c8a6";
                    errorEmail.style.display = "none";
                    iconEmail.classList.remove('fa-circle-xmark');
                    iconEmail.classList.add('fa-circle-check');
                    iconEmail.style.visibility = "visible";
                    iconEmail.style.color = "#19c8a6";
        
                }
            } 
    
            inputDni.addEventListener("blur", function () {
    
                if (inputDni.value.length < 1) {
                    errorDni.style.display = "block"
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
                })

                inputNacimiento.addEventListener("blur", function () {
    
                    if (inputNacimiento.value.length < 1) {
                        errorNacimiento.style.display = "block"
                        errorNacimiento.innerText = "Ingresá tu fecha de nacimiento";
                        inputNacimiento.style.border = "2.1px solid #EF5350"
                        iconNacimiento.classList.add("fa-circle-xmark")
                        iconNacimiento.style.visibility = "visible"
                        iconNacimiento.style.color = "#EF5350"
                    }
        
                    else {
        
                        errorNacimiento.style.display = "none";
                        inputNacimiento.style.border = "#19c8a6 2.1px solid";
                        iconNacimiento.classList.remove("fa-circle-xmark")
                        iconNacimiento.classList.add("fa-circle-check")
                        iconNacimiento.style.visibility = "visible"
                        iconNacimiento.style.color = "#19c8a6"
        
                    }
                    })
    
    
                inputImagen.addEventListener("change", function () {
                   
                        validarImagen()      
                    
    
                 
                  
                })
                    
                    const validarImagen = () => {
    
                        let extension = inputImagen.value.split(".").pop()
    
                        if (extension != "jpg" && extension != "jpeg" && extension != "png" && extension != "gif") {
                            errorImagen.style.display = "block"
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
    
                    }
                    
                  
               
    
                inputPass.addEventListener("blur", function () {
                        validarPass()
                        passwordIguales()
                })
    
                inputPass2.addEventListener("blur",function(){
                    validarPass2()
                    passwordIguales()
                })
                
           
        
    
    
                const validarPass = () => {
                    regularExp = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
    
    
                    if (inputPass.value.length < 1) {
                        errorPass.style.display = "block"
                        errorPass.innerText = "Ingresá tu contraseña";
                        inputPass.style.border = "2.1px solid #EF5350"
                        iconPass.classList.add("fa-circle-xmark")
                        iconPass.style.visibility = "visible"
                        iconPass.style.color = "#EF5350"
                        errorPass.style.display = "block";
                        
    
                    }
    
                    else if (!(inputPass.value.match(regularExp))) {
                       
                        errorPass.innerText = "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.";
                        inputPass.style.border = "2.1px solid #EF5350"
                        iconPass.classList.add("fa-circle-xmark")
                        iconPass.style.visibility = "visible"
                        iconPass.style.color = "#EF5350"
                        errorPass.style.display = "block";
    
    
                    } else {
                        errorPass.style.display = "none";
                        inputPass.style.border = "#19c8a6 2.1px solid";
                        iconPass.classList.remove("fa-circle-xmark")
                        iconPass.classList.add("fa-circle-check")
                        iconPass.style.visibility = "visible"
                        iconPass.style.color = "#19c8a6"
                    }
    
                }
    
                
    
                const validarPass2 = () => {
                    regularExp = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/
    
    
                    if (inputPass2.value.length < 1) {
                     
                        errorPass2.innerText = "Confirmá tu contraseña";
                        inputPass2.style.border = "2.1px solid #EF5350"
                        iconPass2.classList.add("fa-circle-xmark")
                        iconPass2.style.visibility = "visible"
                        iconPass2.style.color = "#EF5350"
                        errorPass2.style.display = "block";
                    }
    
                    else if (!(inputPass2.value.match(regularExp))) {
                      
                        errorPass2.innerText = "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.";
                        inputPass2.style.border = "2.1px solid #EF5350"
                        iconPass2.classList.add("fa-circle-xmark")
                        iconPass2.style.visibility = "visible"
                        iconPass2.style.color = "#EF5350"
                        errorPass2.style.display = "block";
    
                    } 
                    
       
                    else {
    
                        errorPass2.style.display = "none";
                        inputPass2.style.border = "#19c8a6 2.1px solid";
                        iconPass2.classList.remove("fa-circle-xmark")
                        iconPass2.classList.add("fa-circle-check")
                        iconPass2.style.visibility = "visible"
                        iconPass2.style.color = "#19c8a6"
                    }
    
                }
    
    
                const passwordIguales = () => {
                  if (inputPass.value != inputPass2.value  ) {
                       
                        errorPass2.innerText = "Las contraseñas no coinciden";
                        inputPass2.style.border = "2.1px solid #EF5350"
                        iconPass2.classList.add("fa-circle-xmark")
                        iconPass2.style.visibility = "visible"
                        iconPass2.style.color = "#EF5350"
                        errorPass2.style.display = "block";
                    }
                }
    
    
            botonSubmit.addEventListener("click", function(event){
    
                    
    
                    let errores = {};
    
                    if (inputNombre.value.length < 1) {
                        errores.nombre = "Ingresá tu nombre"
                    }
                    else if (inputNombre.value.length < 2) {
                        errores.nombre = "El nombre debe tener al menos 2 caracteres"
                    }
    
                    if (inputApellido.value.length < 1) {
                        errores.apellido = "Ingresá tu apellido"
                    }
                    else if (inputApellido.value.length < 2) {
                        errores.apellido = "El apellido debe tener al menos 2 caracteres"
                    }
    
                    if (inputEmail.value.length < 1) {
                        errores.email = "Ingresá tu correo electrónico"
                    }
                    else if (!(inputEmail.value.match(expReg))){
                        errores.email = "Ingresá un correo electrónico válido"
                    }
    
                    if (inputDni.value.length < 1) {
                        errores.dni = "Ingresá tu DNI"
                    }

                    if (inputNacimiento.value.length < 1) {
                        errores.nacimiento = "Ingresá tu fecha de nacimiento"
                    }
    
                    
                    if (inputPass.value.length < 1) { 
                        errores.pass = "Ingresá tu contraseña"
                    }
    
                    else if (!(inputPass.value.match(regularExp))) {
                        errores.pass = "Ingresá una contraseña válida"
                    }
    
                    if (inputPass2.value != inputPass.value) {
    
                        errores.pass2 = "Las contraseñas no coinciden"
                    }
    
                    if (Object.keys(errores).length >=1) {
    
                       
                        event.preventDefault();
    
                        errorNombre.innerText = (errores.nombre) ? errores.nombre: "";
                        errorApellido.innerText = (errores.apellido) ? errores.apellido: "";
                        errorEmail.innerText = (errores.email) ? errores.email: "";
                        errorDni.innerText = (errores.dni) ? errores.dni: "";
                        errorNacimiento.innerText = (errores.nacimiento ? errores.nacimiento: "")
                        errorPass.innerText = (errores.pass) ? errores.pass: "";
                        errorPass2.innerText = (errores.pass2) ? errores.pass2: "";
                        // errorImagen.innerText = (errores.imagen) ? errores.imagen: "";
                       
        
            
                    } else {
    
                        form.submit();
                        
                    }
    
            
    
    
                })
    
    
    
    
    
    }
    


    
)



