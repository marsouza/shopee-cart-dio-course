/* 
Ações do carrinho de compras
- Adicionar item ao carrinho
- Remover item do carrinho
- Atualizar quantidade de item no carrinho
- Limpar carrinho
- Calcular total do carrinho
- Calcular frete do carrinho
- obter itens do carrinho
*/

async function addItem(userCart, item) {
    // Lógica para adicionar item ao carrinho
    userCart.push(item);
}

async function removeItem(userCart, itemName) {
    // Lógica para remover item do carrinho
    const itemIndex = userCart.findIndex((item) => item.name === itemName);

    if (itemIndex !== -1) {
        userCart.splice(itemIndex, 1);
    } else {
        console.log(`Item ${itemName} não encontrado no carrinho.`);
    }
}

async function updateItemQuantity(userCart, itemName, action, quantity = 1) {
    // Lógica para atualizar a quantidade de um item no carrinho
    const itemIndex = userCart.findIndex((item) => item.name === itemName);

    if (itemIndex !== -1) {
        switch (action) {
            case 'add':
                userCart[itemIndex].quantity += quantity;
                break;
            case 'sub':
                userCart[itemIndex].quantity -= quantity;
                if (userCart[itemIndex].quantity <= 0) {
                    removeItem(userCart, itemName);
                }
                break;
            case 'set':
                if (quantity >=0) {
                    userCart[itemIndex].quantity = quantity;
                } else {
                    removeItem(userCart, itemName);
                }    
                break;
            default:
                console.log(`Ação ${action} inválida para atualizar a quantidade do item.`);
                break;
        }
    } else {
        console.log(`Item ${itemName} não encontrado no carrinho.`);
    }
}

async function clearCart(userCart) {
    // Lógica para limpar o carrinho
    userCart.length = 0;
}

async function calculateCartTotal(userCart) {
    // Lógica para calcular o total do carrinho
    const total = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
}

async function calculateShipping(userCart) {
    // Lógica para calcular o frete do carrinho
    let shippingCost = 0;
    const qttyProducts = userCart.reduce((total, item) => total + item.quantity, 0);

    console.log(`\nQuantidade de produtos no carrinho: ${qttyProducts}`);

    if (qttyProducts >= 1 && qttyProducts <= 5) {
        shippingCost = 30;
    } else if (qttyProducts > 5 && qttyProducts <= 10) {
        shippingCost = 15;
    } else if (qttyProducts > 10) {
        shippingCost = 0;
    } else {
        console.log('Carrinho vazio, frete não calculado.');
    }

    console.log(`\nCusto do frete: R$ ${shippingCost.toFixed(2)}`);
}

async function getCartItems(userCart) {
    // Lógica para obter os itens do carrinho
    if (userCart.length === 0) {
        console.log('Carrinho vazio.');
    }
    console.log('\nItens no carrinho:');
    userCart.forEach((item, index) => {
        console.log(`Id: ${(index +1)} Item: ${item.name}, Quantidade: ${item.quantity}, Preço: R$ ${item.price.toFixed(2)}`);
    });
}

export {
    addItem,
    removeItem,
    updateItemQuantity,
    clearCart,
    calculateCartTotal,
    calculateShipping,
    getCartItems,
};