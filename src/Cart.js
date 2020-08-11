import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {






    const { products } = props;

    return (
        <div className="cart">
            {
                products.map((product) => {
                    return (
                        <CartItem
                            product={product}
                            key={product.id}
                            onincreaseQuantity={props.onincreaseQuantity}
                            ondecreaseQuantity={props.ondecreaseQuantity}
                            ondeleteCart={props.ondeleteCart}
                        />
                    )
                })
            }
        </div>
    );
}



export default Cart;