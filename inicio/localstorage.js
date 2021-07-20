class Formulario{
    constructor(pNombre,pApellido,pDireccion,pCiudad,pPais,pCP, pPedido){
        this.Nombre = pNombre;
        this.Apellido = pApellido;
        this.Direccion = pDireccion;
        this.Ciudad = pCiudad;
        this.Pais = pPais;
        this.CodigoPostal = pCP;
        this.pedido = pPedido;  // Esta es la nueva propiedad
    };
    resetearFormulario(){
        document.getElementById('formulario').reset();
    };
};

const alert = document.querySelector('.alert')

const enviar = () => {
    let nombreRegistro = $("#nombreRegistro")[0].value;
    let apellidoRegistro = $("#apellidoRegistro")[0].value;
    let direccionRegistro = $("#direccionRegistro")[0].value;
    let ciudadRegistro = $("#ciudadRegistro")[0].value;
    let paisRegistro = $("#paisRegistro")[0].value;
    let cpRegistro = $("#cpRegistro")[0].value;

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
};


