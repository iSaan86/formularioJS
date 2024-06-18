
function validaNombre(){
var nombre=document.getElementById('nombre').value;
var clave=document.getElementById('passw').value;


if(nombre==""){
    document.getElementById('respuestaerror1').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'> Campo vacío";
    document.getElementById('respuestaerror1').style.color="red";
    document.getElementById('respuestaerror1').style.fontSize="smaller";
    document.getElementById('nombre').focus();
    document.getElementById('nombre').value = "";
    // return false;
}else{
    var patron=/^[A-Za-z\s]*$/;
    if(!patron.test(nombre)){
        document.getElementById('respuestaerror1').innerHTML="Formato incorrecto. Use sólo caracteres de texto";
        document.getElementById('respuestaerror1').style.color="red";
        document.getElementById('respuestaerror1').style.fontSize="smaller";
        document.getElementById('nombre').focus();
        document.getElementById('nombre').value = "";
        // return false;
    };
}
// Para validar la contraseña:
if(clave==""){
    document.getElementById('passw').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'> Campo vacío";
    document.getElementById('passw').style.color="red";
    document.getElementById('passw').style.fontSize="smaller";
    document.getElementById('passw').value = "";
    // clave.focus();
}else{
    var passCorrecta=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if(passCorrecta(clave)==false){
        document.getElementById('passw').innerHTML="Formato incorrecto. Use los parametros correctos";
        document.getElementById('respuestaerror1').style.color="red";
        document.getElementById('respuestaerror1').style.fontSize="smaller";
    }

}
}
