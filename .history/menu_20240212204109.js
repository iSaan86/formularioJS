
function validaNombre(){
var nombre = document.getElementById('nombre').value;
var clave = document.getElementById('passw').value;
var dni = document.getElementById('dni').value;
var patron = /^[A-Za-z\s]*$/;
var passCorrecta = /^(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;
var dniCorrecto = /^(\d{8})([A-Za-z]{1})$/;
var telefono = document.getElementById('telefono').value;


if(nombre==""){
    document.getElementById('respuestaerror1').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'> Campo vacío";
    document.getElementById('respuestaerror1').style.color="red";
    document.getElementById('respuestaerror1').style.fontSize="smaller";
    document.getElementById('nombre').focus();
    document.getElementById('nombre').value = "";
    // return false;
}else{
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
    document.getElementById('dniMensaje').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'> Campo vacío";
    document.getElementById('dniMensaje').style.color="red";
    document.getElementById('dniMensaje').style.fontSize="smaller";
    document.getElementById('dni').value = ""; 
    // return false;
}else{
    
    if(!dniCorrecto.test(dni)){
        document.getElementById('dniMensaje').innerHTML="Formato incorrecto. Use los parametros correctos";
        document.getElementById('dniMensaje').style.color="red";
        document.getElementById('dniMensaje').style.fontSize="smaller";
        document.getElementById('dni').value = "";
        // return false;
    }else{
        var letras= new Array ('T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T');
        console.log(dni);
        var letra = dni.slice(-1);
        var numero= dni.slice(0,8);
        var resto = numero%23;
        console.log(resto, numero)
        
        if(letras[resto]!=letra){
            document.getElementById('dniMensaje').innerHTML="Letra de DNI incorrecta";
            document.getElementById('dniMensaje').style.color="red";
            document.getElementById('dniMensaje').style.fontSize="smaller";
             // return false;
        }else{
            alert('dni correcto')
        }
    }
}
// Para validar el telefono:
patronTel = /^^[+34] ([0-9]{3}) ([0-9]{2}) ([0-9]{2}) ([0-9]{2})$/
console.log(telefono)
if(telefono==""){
    document.getElementById('telMensaje').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'> Campo vacío";
    document.getElementById('telMensaje').style.color="red";
    document.getElementById('telMensaje').style.fontSize="smaller";
    document.getElementById('telefono').value = ""; 
    // return false;
}else{
    if(!patronTel.test(telefono)){
        document.getElementById('telMensaje').innerHTML="Formato incorrecto. Siga el formato indicado";
        document.getElementById('telMensaje').style.color="red";
        document.getElementById('telMensaje').style.fontSize="smaller";
        document.getElementById('telefono').focus();
        document.getElementById('telefono').value = "";
        // return false;
    }else{
        alert('Telefono correcto')
    }
}



}
