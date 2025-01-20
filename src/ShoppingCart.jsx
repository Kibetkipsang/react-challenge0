import React from 'react';
import CartItem from './CartItem'; 

function ShoppingCart({ cart, removeFromCart, updateQuantity }) {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="ShoppingCart" >
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            removeFromCart={removeFromCart}
                            updateQuantity={updateQuantity}
                        />
                    ))}
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
}

export default ShoppingCart;