window.onload = function(){
    //let formu =  document.getElementById('form');
    let campoEmail=document.getElementById('email');
    let campoPassword = document.querySelector('#password');
    let parrafoEmail = document.getElementById('emailP');
    let parrafoPassword = document.getElementById('passwordP');

    let iconEmail = document.getElementById('iconEmail');
    let iconPassword=document.getElementById('iconPassword');
    let btnEnviar=document.getElementById('btnEnviar');

    btnEnviar.addEventListener("click",(e)=>{
        //Revisar esta línea de preventDefault, porque como estaba no me dejaba loguearme
        // e.preventDefault();
        validarCorreo();
        validarPassword();
    })

    
    
    campoEmail.addEventListener("blur",(e)=>{
            validarCorreo();
    })

    campoPassword.addEventListener("blur",(e)=>{
     
        validarPassword();
    })

    

    const validarCorreo=()=>{
        expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

         if(campoEmail.value.match(expReg)){
             campoEmail.style.border="2.1px solid #19c8a6";
             parrafoEmail.style.display = "none";
             iconEmail.classList.remove('fa-circle-xmark');
             iconEmail.classList.add('fa-circle-check');
             iconEmail.style.visibility="visible";
             iconEmail.style.color="#19c8a6";
           // parrafoEmail.innerHTML=" FORMATO válido";
        }else {
            parrafoEmail.innerHTML="Tenés que ingresar un correo electrónico válido";
            parrafoEmail.style.display="block";
            parrafoEmail.classList.add('is-invalid');
            campoEmail.style.border="2.1px solid #EF5350";
            iconEmail.classList.remove('fa-circle-check');
            iconEmail.classList.add('fa-circle-xmark');
            iconEmail.style.visibility="visible";
            iconEmail.style.color="#EF5350";
        
        } 
   
    }

 

    const validarPassword=()=>{
        if(campoPassword.value==''){
            parrafoPassword.style.display="block";
            campoPassword.style.border="2.1px solid #EF5350";
            parrafoPassword.classList.add('is-invalid');
            parrafoPassword.innerHTML="Ingresá tu contraseña";
            iconPassword.classList.remove('fa-circle-check');
            iconPassword.classList.add('fa-circle-xmark');
            iconPassword.style.visibility="visible";
            iconPassword.style.color="#EF5350";
        
        } else {

            parrafoPassword.style.display="none";
            campoPassword.style.border="2.1px solid #19c8a6";
            iconPassword.classList.remove('fa-circle-xmark');
            iconPassword.classList.toggle('fa-circle-check');
            iconPassword.style.visibility="visible";
            iconPassword.style.color="#19c8a6";

         

        }
    }


    // btnEnviar.addEventListener("click",(e)=>{
    //     //Revisar esta línea de preventDefault, porque como estaba no me dejaba loguearme
    //     e.preventDefault();

    //     let errores = {}
        
    //     if (campoEmail.value.match(expReg)) {
    //         errores.email = "Ingresá un correo electrónico válido"
    //     }

    //     if (campoPassword.value=='') {
    //         errores.password = "Ingresá tu contraseña"
            
    //     }

    //     if (Object.keys(errores).length >=1) {


    //         parrafoEmail.innerText = (errores.email) ? errores.email: "";
    //         parrafoPassword.innerText = (errores.password) ? errores.password: "";
           

    //     } else {
            
    //         form.submit();
            
    //     }
        
       
    // })
 
}