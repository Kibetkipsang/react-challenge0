import React from 'react';

function ProductItem({ product, addToCart }) {
    const handleClick = () => addToCart(product);

    return (
        <div className="ProductItem" >
            <h1>{product.name}</h1>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={handleClick}>Add To Cart</button>
        </div>
    );
}

export default ProductItem;