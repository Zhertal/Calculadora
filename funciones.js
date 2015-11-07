function agregarNumero(numero)
{
    document.getElementById('resultado').innerHTML+=numero;
    //+= sirve para evitar que se remplace el valor anterior
    //si se usa un input se pone .vaule en lugar de .innerHTML
}
function borrar()
{
    document.getElementById('resultado').innerHTML="";
}
function igual()
{
    cadena=document.getElementById('resultado').innerHTML;
    resultado=eval(cadena);
    document.getElementById('resultado').innerHTML=resultado;
}


function acordeon()
{
    valor=document.getElementById('resultado').innerHTML;
    if (valor=="7412")
    {
        window.location.assign('crearacordeon.html');
    }
    if (valor=="7895123")
    {
        window.location.assign('acordeon.html');
    }
}


//crear acordeon

function guardar()
{
    acordeon=document.getElementById('acordeon').value;
    localStorage.setItem('acordeon',acordeon);
    window.location.assign('index.html');
}

//cargar acordeon
function regresar()
{
    window.location.assign("index.html");
}
function cargarAcordeon()
{
    acordeon=localStorage.getItem('acordeon');
    document.getElementById('acordeon').innerHTML=acordeon;
}