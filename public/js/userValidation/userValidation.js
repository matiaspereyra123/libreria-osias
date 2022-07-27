window.onload = function(){
    //let formu =  document.getElementById('form');
    let campoEmail=document.getElementById('email');
    let campoPassword = document.querySelector('#password');
    let parrafoEmail = document.getElementById('emailP');
    let parrafoPassword = document.getElementById('passwordP');

    let btnEnviar=document.getElementById('btnEnviar');

    btnEnviar.addEventListener("click",(e)=>{
        e.preventDefault();
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
             parrafoEmail.style.display = "none"
           // parrafoEmail.innerHTML=" FORMATO válido";
        }else{
            parrafoEmail.innerHTML="El correo no es un FORMATO válido";
            parrafoEmail.style.display="block";
            parrafoEmail.classList.add('is-invalid');
            campoEmail.style.border="2.1px solid Red";
        } 
   
    }

 

    const validarPassword=()=>{
        if(campoPassword.value==''){
            parrafoPassword.style.display="block";
            campoPassword.style.border="2.1px solid red";
            parrafoPassword.classList.add('is-invalid');
            parrafoPassword.innerHTML="El campo PASSWORD se encuentra vacio"
        }else{

             parrafoPassword.style.display="none";
            campoPassword.style.border="2.1px solid green";

         

        }
    }
 
}