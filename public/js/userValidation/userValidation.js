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
             campoEmail.style.border="2.1px solid green";
             parrafoEmail.style.display = "none";
             
                iconEmail.classList.remove('fa-circle-xmark');
                iconEmail.classList.add('fa-circle-check');
              iconEmail.style.visibility="visible";
              iconEmail.style.color="green";
           // parrafoEmail.innerHTML=" FORMATO válido";
        }else{
            parrafoEmail.innerHTML="El correo electrónico no es válido";
            parrafoEmail.style.display="block";
            parrafoEmail.classList.add('is-invalid');
            campoEmail.style.border="2.1px solid Red";
            iconEmail.classList.remove('fa-cicle-check');
            iconEmail.classList.add('fa-circle-xmark');
            iconEmail.style.visibility="visible";
            iconEmail.style.color="red";
        
        } 
   
    }

 

    const validarPassword=()=>{
        if(campoPassword.value==''){
            parrafoPassword.style.display="block";
            campoPassword.style.border="2.1px solid red";
            parrafoPassword.classList.add('is-invalid');
            parrafoPassword.innerHTML="Ingresá tu contraseña";
            iconPassword.classList.remove('fa-cicle-check');
            iconPassword.classList.add('fa-circle-xmark');
            iconPassword.style.visibility="visible";
            iconPassword.style.color="red";
        
        }else{

             parrafoPassword.style.display="none";
            campoPassword.style.border="2.1px solid green";
            iconPassword.classList.remove('fa-circle-xmark');
            iconPassword.classList.add('fa-circle-check');
          iconPassword.style.visibility="visible";
          iconPassword.style.color="green";

         

        }
    }
 
}