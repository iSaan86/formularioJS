
function validaNombre(){
var nombre=document.getElementById('nombre').value;
if(nombre==""){
    document.getElementById('respuestaerror1').innerHTML="<img src='img/alerta.svg' alt='alerta' width='15px'> Campo vacío";
    document.getElementById('respuestaerror1').style.color="red";
    document.getElementById('respuestaerror1').style.fontSize="smaller";
}else{
    var patron="^[A-Za-z\s]*$/";
    if(!patron.test(nombre)){
        alert('Formato incorrecto')
    };
}
}
