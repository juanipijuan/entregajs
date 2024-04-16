// Variables
let cartItems = [];
let totalPrice = 0;

// Arrays para tipos de pescado y precios
const fishTypes = ["merluza", "calamar", "langostino"];
const prices = [6, 9, 12];

// Agregar producto al carrito
let fishType = prompt("Ingrese el tipo de pescado (merluza, calamar, langostino):");
if (!fishTypes.includes(fishType)) {
  alert("Tipo de pescado inválido.");
} else {
  let quantity = parseInt(prompt(`Ingrese la cantidad de ${fishType}:`));
  if (isNaN(quantity) || quantity <= 0) {
    alert("Cantidad inválida.");
  } else {
    const index = fishTypes.indexOf(fishType);
    const price = prices[index] * quantity;
    cartItems.push({ type: fishType, quantity: quantity, price: price });
    totalPrice += price;
    alert(`¡${quantity}x ${fishType} ha sido añadido al carrito!\nTotal: ${totalPrice} $`);
  }
}

// Mostrar contenido del carrito
if (cartItems.length === 0) {
  alert("El carrito está vacío.");
} else {
  let cartSummary = "Contenido del carrito:\n";
  cartItems.forEach(item => {
    cartSummary += `${item.quantity}x ${item.type} - ${item.price} $\n`;
  });
  cartSummary += `Total: ${totalPrice} $`;
  alert(cartSummary);
}
