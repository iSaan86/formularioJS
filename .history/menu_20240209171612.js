
function validaNombreVacio(){
var nombre=document.getElementById('nombre').value;
if(nombre==""){
    alert('Complete los datos del nombre');
    document.getElementById('respuestaerror1').innerHTML="Campo vacio";
    document.getElementById('respuestaerror1').style="red";
}
}
