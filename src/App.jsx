import { useState } from "react";
import products from "./data"; 
import ProductList from "./ProductList"; 
import ShoppingCart from "./ShoppingCart"; 
import "./App.css"

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const availableItem = cart.find((item) => item.id === product.id);
        if (availableItem) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId);
        } else {
            setCart(
                cart.map((item) =>
                    item.id === productId ? { ...item, quantity } : item
                )
            );
        }
    };

    return (
        <div className="App">
            <h1>E-Commerce Cart</h1>
            <ProductList products={products} addToCart={addToCart} />
            <ShoppingCart
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
            />
        </div>
    );
}

export default App;