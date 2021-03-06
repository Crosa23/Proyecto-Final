let arrayCompra = [];
const mostrarCarrito = document.getElementById('mostrarCarrito');
const ocultarCarrito = document.getElementById('OcultarCarrito');



const imprimoProductos = () => {
  $.getJSON('./catalogo.json', function(autos){
    $("#catalogo").html(
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
    const añadirCarritoCompras = document.querySelectorAll('.añadirCarro');
    añadirCarritoCompras.forEach((añadirCarritoBoton) => {
      añadirCarritoBoton.addEventListener('click', agregarAlCarritoClick);
    });
  })
};

$(document).ready(imprimoProductos())

$('#mostrarCarrito').click(function(e){
  btnMostrar(e);
});

$('#ocultarCarrito').click(function(e){
  btnOcultar(e);
});

const btnMostrar = e => {
  if (e.target.classList.contains('mostrarCarrito')) {
  $('#carritoOcultar').show(2000);
  
  
};
}     

const btnOcultar = e => {
  if (e.target.classList.contains('ocultarCarrito')) {    
  $('#carritoOcultar').hide(2000);
  
};
}

const añadirCarritoCompras = document.querySelectorAll('.añadirCarro');
añadirCarritoCompras.forEach((añadirCarritoBoton) => {
  añadirCarritoBoton.addEventListener('click', agregarAlCarritoClick);
});

const comprarBoton = document.querySelector('.comprarButton');
comprarBoton.addEventListener('click', comprarBotonClick);

const shoppingItemsContenedor = document.querySelector(
  '.shoppingItemsContenedor'
);

function agregarAlCarritoClick(event) {
  const button = event.target;
  const item = button.closest('.item');

  const itemTitle = item.querySelector('.item-title').textContent;
  const itemPrice = item.querySelector('.item-price').textContent;
  const itemImage = item.querySelector('.item-image').src;

  agregarItemAlCarrito(itemTitle, itemPrice, itemImage);
};


function agregarItemAlCarrito(itemTitle, itemPrice, itemImage) {
  const elementosTitulo = shoppingItemsContenedor.getElementsByClassName(
    'shoppingCartItemTitle'
  );
  for (let i = 0; i < elementosTitulo.length; i++) {
    if (elementosTitulo[i].innerText === itemTitle) {
      let elementQuantity = elementosTitulo[
        i
      ].parentElement.parentElement.parentElement.querySelector(
        '.shoppingCartItemQuantity'
      );
      elementQuantity.value++;
      $('.toast').toast('show');
      updateShoppingCartTotal();
      return;
    };
  };
  let objetoAuto = {
    itemTitle,
    itemPrice
};
arrayCompra.push(objetoAuto);
localStorage.setItem ("arrayCompra",JSON.stringify(arrayCompra));

  const filaCarritoCompras = document.createElement('div');
  const shoppingCarritoContenido = `
  <div class="row shoppingCartItem">
        <div class="col-6">
            <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <img src=${itemImage} class="shopping-cart-image">
                <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitle}</h6>
            </div>
        </div>
        <div class="col-2">
            <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                <p class="item-price mb-0 shoppingCartItemPrice">${itemPrice}</p>
            </div>
        </div>
        <div class="col-4">
            <div
                class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                    value="1">
                <button class="btn btn-danger buttonDelete" type="button">X</button>
            </div>
        </div>
    </div>`;
  filaCarritoCompras.innerHTML = shoppingCarritoContenido;
  shoppingItemsContenedor.append(filaCarritoCompras);

  filaCarritoCompras
    .querySelector('.buttonDelete')
    .addEventListener('click', borrarShoppingCarritoItem);

  filaCarritoCompras
    .querySelector('.shoppingCartItemQuantity')
    .addEventListener('change', quantityChanged);

  actualizarCarritoCompras();
};

function actualizarCarritoCompras() {
  let total = 0;
  const shoppingCartTotal = document.querySelector('.shoppingCarritoTotal');

  const shoppingCarritoItems = document.querySelectorAll('.shoppingCartItem');

  shoppingCarritoItems.forEach((shoppingCarritoItems) => {
    const shoppingCarritoItemPrecioElemento = shoppingCarritoItems.querySelector(
      '.shoppingCartItemPrice'
    );
    const shoppingCarritoItemPrecio = Number(
      shoppingCarritoItemPrecioElemento.textContent.replace('$', '')
    );
    const shoppingCartItemQuantityElement = shoppingCarritoItems.querySelector(
      '.shoppingCartItemQuantity'
    );
    const shoppingCartItemQuantity = Number(
      shoppingCartItemQuantityElement.value
    );
    total = total + shoppingCarritoItemPrecio * shoppingCartItemQuantity;
  });
  shoppingCartTotal.innerHTML = `$ ${total.toFixed(2)}`;
};

function borrarShoppingCarritoItem(event) {
  const buttonClicked = event.target;
  buttonClicked.closest('.shoppingCartItem').remove();
  actualizarCarritoCompras();
};

function quantityChanged(event) {
  const input = event.target;
  input.value <= 0 ? (input.value = 1) : null;
  actualizarCarritoCompras();
};

function comprarBotonClick() {
  shoppingItemsContenedor.innerHTML = '';
  actualizarCarritoCompras();
};

function Compra(){ 
Swal.fire(
  '¡FELICITACIONES!',
  '¡Has Conseguido Tu Auto!',
  'success'
)
};