/*
    Açoes do item
    -  calcular subtotal do item
*/

async function calculateItemSubtotal(name, price, quantity) {
    // Lógica para calcular o subtotal de um item
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}

export default calculateItemSubtotal