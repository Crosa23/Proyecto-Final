class Formulario{
    constructor({nombre,apellido,direccion,ciudad,pais,codpost, pedido}){
        this.Nombre = nombre;
        this.Apellido = apellido;
        this.Direccion = direccion;
        this.Ciudad = ciudad;
        this.Pais = pais;
        this.CodigoPostal = codpost;
        this.pedido = pedido;  // Esta es la nueva propiedad
    };
    resetearFormulario(){
        document.getElementById('formulario').reset();
    };
};

const alert = document.querySelector('.alert')

// Funcion de toma de datos del formulario version flexible no tenes harcodeados los valores que vas a recibir
$("#formulario").on("submit", function(event){
    event.preventDefault();

    let formdata = {pedido: arrayCompra}

    $(this).serializeArray().forEach(obj => formdata[obj.name] = obj.value);

    localStorage.setItem(formdata.nombre,JSON.stringify(new Formulario(formdata)));
  });
/*
const enviar = (evento) => {
    evento.preventDefault()
    
    let nombreRegistro = $("#nombreRegistro").val();
    let apellidoRegistro = $("#apellidoRegistro").val();
    let direccionRegistro = $("#direccionRegistro").val();
    let ciudadRegistro = $("#ciudadRegistro").val();
    let paisRegistro = $("#paisRegistro").val();
    let cpRegistro = $("#cpRegistro").val();

    console.log(nombreRegistro);
    console.log(apellidoRegistro);
    console.log(direccionRegistro);
    console.log(ciudadRegistro);
    console.log(paisRegistro);
    console.log(cpRegistro);
    
    let claveStorage = nombreRegistro;

    let datosFormulario = new Formulario(nombreRegistro,apellidoRegistro,direccionRegistro,ciudadRegistro,paisRegistro,cpRegistro, arrayCompra);
    console.log(datosFormulario);
    datosFormulario.resetearFormulario();

    localStorage.setItem (claveStorage,JSON.stringify(datosFormulario));
};*/


