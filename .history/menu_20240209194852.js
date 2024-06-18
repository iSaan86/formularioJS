
function validaNombre(){
var nombre=document.getElementById('nombre').value;
var clave=document.getElementById('passw').value;

document.getElementById('respuestaerror1').innerHTML = "";
document.getElementById('contras').innerHTML = "";

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
        document.getElementById('nombre').focus();
        document.getElementById('nombre').value = "";
        // return false;
    };
}
if(clave==""){
    document.getElementById('contras').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'> Campo vacío";
    document.getElementById('contras').style.color="red";
    document.getElementById('contras').style.fontSize="smaller";
    document.getElementById('passw').value = ""
    // clave.focus();
}
}
