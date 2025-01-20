import React from 'react';

function CartItem({ item, removeFromCart, updateQuantity }) {
    return (
        <div className="CartItem" >
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            />
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
    );
}

export default CartItem;