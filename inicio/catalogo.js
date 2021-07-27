const autos = [
    {
        id: 1,
        nombre: "Amarok Negra",
        img: "../img/amarok.jpg",
        precio: 4000000
    },
    {
        id: 2,
        nombre: "Hilux Roja",
        img: "../img/hilux.jpg",
        precio: 6500000
    },
    {
        id: 2,
        nombre: "Etios Crema",
        img: "../img/107.jpg",
        precio: 800000
    },
    {   
        id:2,
        nombre: "Renegade Negra",
        img: "../img/jeep.jpg",
        precio: 6500000
    },
    {
        id:3,
        nombre:"SW4 Blanca",
        img:"../img/s4.jpg",
        precio:5999999,
    },
    {
        id:4,
        nombre:"Toro Blanca",
        img:"../img/Toro.jpg",
        precio:3000000,
    },
    {
        id:5,
        nombre:"Golf Blanco",
        img:"../img/golf.jpg",
        precio:5000000,
    },
    {
        id:6,
        nombre:"Gol Blanco",
        img:"../img/gol.png",
        precio:850000,
    },
]

$("#catologo").html(
    autos.map( (auto, index) => 
    
    `${ (index%2 == 0)  ? '<div class="row">' : ""}  
        <div class="col-12 col-md-6">
            <div class="item shadow mb-4">
                <h3 class="item-title">${auto.nombre}</h3>
                <img class="item-image" src="${auto.img}">
                <div class="item-details">
                    <h4 class="item-price">$${auto.precio}</h4>
                    <button class="item-button btn btn-primary añadirCarro">AÑADIR AL CARRITO</button>
                </div>
            </div>
        </div>
    ${ (index%2 != 0)  ? '</div>' : ""}`).join("")
)