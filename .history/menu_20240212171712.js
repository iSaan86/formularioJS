
function validaNombre(){
var nombre = document.getElementById('nombre').value;
var clave = document.getElementById('passw').value;
var dni = document.getElementById('dni').value;


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
    document.getElementById('contras').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'> Campo vacío";
    document.getElementById('contras').style.color="red";
    document.getElementById('contras').style.fontSize="smaller";
    document.getElementById('passw').value = "";
    // return false;
}else{
    var passCorrecta=/^(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
    if(!passCorrecta.test(clave)){
        document.getElementById('contras').innerHTML="Formato incorrecto. Use los parametros correctos";
        document.getElementById('contras').style.color="red";
        document.getElementById('contras').style.fontSize="smaller";
        document.getElementById('passw').value = "";
        // return false;
    }
}
// Para validar el DNI
if(dni==""){
    document.getElementById('dni').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'> Campo vacío";
    document.getElementById('dni').style.color="red";
    document.getElementById('contras').style.fontSize="smaller";
    document.getElementById('passw').value = ""; 
    // return false;
}else{
    var 
}

}
