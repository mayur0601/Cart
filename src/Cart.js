import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {
  const { products } = props;
  
  return (
    <div className="cart">
      {products.map((product) => (
        <CartItem
          key={product.id}
          product={product}
          onIncreaseQuantity={props.onIncreaseQuantity}
          onDecreaseQuantity={props.onDecreaseQuantity}
          onDeleteProduct={props.onDeleteProduct}
        />
        ))}
    </div>
  )
}

export default Cart;