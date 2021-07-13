class Formulario{
    constructor(pNombre,pApellido,pDireccion,pCiudad,pPais,pCP){
        this.Nombre = pNombre;
        this.Apellido = pApellido;
        this.Direccion = pDireccion;
        this.Ciudad = pCiudad;
        this.Pais = pPais;
        this.CodigoPostal = pCP;
    };
    resetearFormulario(){
        document.getElementById('formulario').reset();
    };
};

const alert = document.querySelector('.alert')

const enviar = () => {
    let nombreRegistro = document.querySelector("#nombreRegistro").value;
    let apellidoRegistro = document.querySelector("#apellidoRegistro").value;
    let direccionRegistro = document.querySelector("#direccionRegistro").value;
    let ciudadRegistro = document.querySelector("#ciudadRegistro").value;
    let paisRegistro = document.querySelector("#paisRegistro").value;
    let cpRegistro = document.querySelector("#cpRegistro").value;

    console.log(nombreRegistro);
    console.log(apellidoRegistro);
    console.log(direccionRegistro);
    console.log(ciudadRegistro);
    console.log(paisRegistro);
    console.log(cpRegistro);
    
    let claveStorage = nombreRegistro;

    let datosFormulario = new Formulario(nombreRegistro,apellidoRegistro,direccionRegistro,ciudadRegistro,paisRegistro,cpRegistro);
    console.log(datosFormulario);
    datosFormulario.resetearFormulario();

    localStorage.setItem (claveStorage,JSON.stringify(datosFormulario));
    alert.classList.add('mostrar')
    setTimeout(()=>{
        alert.classList.remove('mostrar')
    }, 3000);
};


