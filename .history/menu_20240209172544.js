
function validaNombreVacio(){
var nombre=document.getElementById('nombre').value;
if(nombre==""){
    document.getElementById('respuestaerror1').innerHTML="<img src='img/alerta.svg' alt='alerta'> Campo vacío";
    document.getElementById('respuestaerror1').style.color="red";
    document.getElementById('respuestaerror1').style.fontSize="small";
    
    
    

}
}
