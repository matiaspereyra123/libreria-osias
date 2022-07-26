window.onload = function(){
    let formulario = document.querySelector('#formulario');
    let formu= document.querySelector(".formulario-completo");
    let email=document.getElementById("email");
    let inputPassword=document.getElementById('password');
    let errores=document.querySelector(".errores");
    let passwordP = document.getElementById("passwordP");
    

    

    inputPassword.addEventListener("blur",function(){
        if(inputPassword.value=''){
            inputPassword.style.borderColor="Red";
            console.log("password vacio")
        }
    })

   
     
 

}
//probando