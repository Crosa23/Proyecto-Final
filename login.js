var usuarioBD = "admin";
var passBD = 123456;

const ingresar = () => {
    let usuario = document.getElementById("usuario").value;
    let contrasenia = document.getElementById("contrasenia").value;
    let mensajeValidacion = document.querySelector("#mensaje-validacion");


    if(usuario == usuarioBD && contrasenia == passBD){
        mensajeValidacion.className="text-success";
        mensajeValidacion.innerHTML=`Bienvenido ${usuario}`;

        setTimeout(()=>{
            window.location='../home/index.html';
        },3000);

    }else{
        mensajeValidacion.className="text-danger";
        mensajeValidacion.innerHTML="Usuario o contraseña incorrecta";
        setTimeout(()=>{
            window.location='./login.html';
        },3000);
    }
};