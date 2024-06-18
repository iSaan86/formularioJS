
function validaNombre(){
var nombre = document.getElementById('nombre').value;
var clave = document.getElementById('passw').value;
var dni = document.getElementById('dni').value;
var telefono = document.getElementById('telefono').value;
var email = document.getElementById('email').value;


// Para validar el nombre:
var patron = /^[A-Za-z\s]*$/;

if(nombre==""){
    document.getElementById('respuestaerror1').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'> Campo vacío";
    document.getElementById('respuestaerror1').style.color="red";
    document.getElementById('respuestaerror1').style.fontSize="smaller";
    document.getElementById('nombre').focus();
    document.getElementById('nombre').value = "";
    return false;
}else{
    if(!patron.test(nombre)){
        document.getElementById('respuestaerror1').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'>Formato incorrecto. Use sólo caracteres de texto";
        document.getElementById('respuestaerror1').style.color="red";
        document.getElementById('respuestaerror1').style.fontSize="smaller";
        document.getElementById('nombre').focus();
        document.getElementById('nombre').value = "";
        return false;
    };
}

// Para validar la contraseña:
var passCorrecta = /^(?=.*[a-zñ])(?=.*[A-ZÑ])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

if(clave==""){
    document.getElementById('contras').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'> Campo vacío";
    document.getElementById('contras').style.color="red";
    document.getElementById('contras').style.fontSize="smaller";
    document.getElementById('passw').focus();
    document.getElementById('passw').value = "";
    return false;
}else{
    
    if(!passCorrecta.test(clave)){
        document.getElementById('contras').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'>Formato incorrecto. Use los parametros correctos";
        document.getElementById('contras').style.color="red";
        document.getElementById('contras').style.fontSize="smaller";
        document.getElementById('passw').value = "";
        return false;
    }
}

// Para validar el DNI
var dniCorrecto = /^(\d{8})([A-Za-z]{1})$/;
if(dni==""){
    document.getElementById('dniMensaje').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'> Campo vacío";
    document.getElementById('dniMensaje').style.color="red";
    document.getElementById('dniMensaje').style.fontSize="smaller";
    document.getElementById('dni').focus();
    document.getElementById('dni').value = ""; 
    return false;
}else{
    
    if(!dniCorrecto.test(dni)){
        document.getElementById('dniMensaje').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'>Formato incorrecto. Use los parametros correctos";
        document.getElementById('dniMensaje').style.color="red";
        document.getElementById('dniMensaje').style.fontSize="smaller";
        document.getElementById('dni').value = "";
        return false;
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
             return false;
        }else{
            // alert('dni correcto')
            console.log('Email correcto')
        }
    }
}
// Para validar el telefono:
patronTel = /[+34] ([0-9]{3}) ([0-9]{2}) ([0-9]{2}) ([0-9]{2})$/
console.log(telefono)
if(telefono==""){
    document.getElementById('telMensaje').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'> Campo vacío";
    document.getElementById('telMensaje').style.color="red";
    document.getElementById('telMensaje').style.fontSize="smaller";
    document.getElementById('telefono').focus();
    document.getElementById('telefono').value = ""; 
    return false;
}else{
    if(!patronTel.test(telefono)){
        document.getElementById('telMensaje').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'>Formato incorrecto. Siga el formato indicado";
        document.getElementById('telMensaje').style.color="red";
        document.getElementById('telMensaje').style.fontSize="smaller";
        document.getElementById('telefono').value = "";
        return false;
    }else{
        console.log('Telefono correcto');
    }
}
// Validar email
patronMail= /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 
console.log(email)
if(email==""){
    document.getElementById('emailMensaje').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'> Campo vacío";
    document.getElementById('emailMensaje').style.color="red";
    document.getElementById('emailMensaje').style.fontSize="smaller";
    document.getElementById('email').focus();
    document.getElementById('email').value = ""; 
    return false;
}else{
    if(!patronMail.test(email)){
        document.getElementById('emailMensaje').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'>Formato incorrecto. Siga el formato indicado";
        document.getElementById('emailMensaje').style.color="red";
        document.getElementById('emailMensaje').style.fontSize="smaller";
        document.getElementById('email').value = "";
        return false;
    }else{
        console.log('Email correcto');
    }
}
// Validar genero por Radios
var generos= document.getElementsByName('genero');
var i;
var flag;

for(i=0;i<generos.length;i++){

    if(generos[i].checked==true){
        flag=true;
        console.log('Un genero chekeado');
        break;
    }else{
        document.getElementById('generoMensaje').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'>Campo vacío";
        document.getElementById('generoMensaje').style.color="red";
        document.getElementById('generoMensaje').style.fontSize="smaller";
        document.getElementsByName('genero').value = "";
        return false;
    }
}
// // otra forma de validar tipe radio, pero para solo 1 seleccion:
// var radioActivo = document.querySelector('input[name="genero"]:checked')
//     if(radioActivo){
//         alert('Has seleccionado '+radioActivo.value);
//     }else{
//         alert('No hay elemento seleccionado')
//     }
var fiesta= document.getElementsByName('fiestas');
var i;
var flag;
var contador=0;

for(i=0;i<fiesta.length;i++){

    if(fiesta[i].checked){
        contador+=1;
    }  
}
if(contador==0){
    document.getElementById('fiestasMensaje').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'>Campo vacío. Selecciones 3 opciones.";
    document.getElementById('fiestasMensaje').style.color="red";
    document.getElementById('fiestasMensaje').style.fontSize="smaller";
    return false;
}
if(contador==1){
    document.getElementById('fiestasMensaje').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'>Hay solo una fiesta checkeada. Seleccione 2 más.";
    document.getElementById('fiestasMensaje').style.color="red";
    document.getElementById('fiestasMensaje').style.fontSize="smaller";
    return false;
}
if(contador==2){
    document.getElementById('fiestasMensaje').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'>Hay solo dos fiestas checkeada. Seleccione 1 más.";
    document.getElementById('fiestasMensaje').style.color="red";
    document.getElementById('fiestasMensaje').style.fontSize="smaller";
    return false;
}
if(contador==3){
  flag=true;
}
if(contador==4){
    document.getElementById('fiestasMensaje').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'>Hay 4 fiestas checkeadas. Seleccione sólo 3.";
    document.getElementById('fiestasMensaje').style.color="red";
    document.getElementById('fiestasMensaje').style.fontSize="smaller";
    return false;
}
if(contador==5){
    document.getElementById('fiestasMensaje').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'>Hay 5 fiestas checkeadas. Seleccione sólo 3.";
    document.getElementById('fiestasMensaje').style.color="red";
    document.getElementById('fiestasMensaje').style.fontSize="smaller";
    return false;
}
var ciudades = document.getElementById('ciudad');
var opciones = ciudades.options;
var longitud =  opciones.length;

    if(opciones.selectedIndex>0){
        var seleccion = opciones.selectedIndex;
        alert('Has seleccionado ' +opciones[seleccion].text);
        
    }else{
            document.getElementById('ciudadMensaje').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'>Debe seleccionar una ciudad.";
            document.getElementById('ciudadMensaje').style.color="red";
            document.getElementById('ciudadMensaje').style.fontSize="smaller";  
    return false;
    }
    return true;
    // IMPRESCINDIBLE HACER RETURN TRUE PARA QUE LLEGUE HASTA EL FINAL DE LA FUNCION
}
function desplegable(){
    var provincia = document.getElementById('provincia');
    // var opcionesP = provincia.options;
    if(provincia.value=="cadiz"){
        console.log('Cadiz')
        document.getElementById('provMensaje').innerHTML='<select id="ciudadesCai" name="ciudadesCai"  alt="Elije Ciudad"><option hidden>Seleccione</option><option value="jerez">Jerez de la Fra.</option><option value="cadiz">Cádiz</option><option value="Sanlúcar">Sanlucar de Barrameda</option><option value="puerto">El Puerto de Sta María</option><option value="cadiz">Puerto Real</option> </select>'
    }
    if(provincia.value=="sevilla"){
        console.log('Sevilla');
        document.getElementById('provMensaje').innerHTML='<select id="ciudadesSev" name="ciudadesSev"  alt="Elije Ciudad"><option hidden>Seleccione</option><option value="doshermanas">Dos Hermanas</option><option value="sevillaC">Sevilla City</option><option value="yedula">Yedula</option><option value="cabezas">Las Cabezas de San Juan</option></select>'
    }
}












