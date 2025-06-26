import * as cartService from "./services/cart.js";
import calculateItemSubtotal from "./services/item.js";

const myCart = [];

const item1 = await calculateItemSubtotal("Item 1", 10.00, 2);
const item2 = await calculateItemSubtotal("Item 2", 5.00, 3);
const item3 = await calculateItemSubtotal("Item 3", 20.00, 1);


// Adicionando itens ao carrinho
console.log("-----> Adicionando itens ao carrinho <-----");
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);
await cartService.getCartItems(myCart);
await cartService.calculateCartTotal(myCart);

// Removendo um item do carrinho
console.log("\n-----> Removendo um item do carrinho <-----");
await cartService.removeItem(myCart, item2.name);
await cartService.getCartItems(myCart);
await cartService.calculateCartTotal(myCart);

// Atualizando a quantidade de um item no carrinho
console.log("\n-----> Atualizando a quantidade de um item no carrinho <-----");
await cartService.updateItemQuantity(myCart, item1.name, 'set', 1);
await cartService.updateItemQuantity(myCart, item3.name, 'add', 1);
await cartService.getCartItems(myCart);
await cartService.calculateCartTotal(myCart);
await cartService.updateItemQuantity(myCart, item1.name, 'sub', 1);
await cartService.getCartItems(myCart);
await cartService.calculateCartTotal(myCart);

// Calculando o frete do carrinho
console.log("\n-----> Calculando o frete do carrinho <-----");
await cartService.calculateShipping(myCart);

// Limpando o carrinho
console.log("\n-----> Limpando o carrinho <-----");
await cartService.clearCart(myCart);
await cartService.getCartItems(myCart);
await cartService.calculateCartTotal(myCart);