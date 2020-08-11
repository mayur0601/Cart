import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {


    constructor(){
        super();
        this.state = {
            products:[
                this.state = {
                    title: 'i phone',
                    price: '99999',
                    qty: 1,
                    img:'',
                    id:''
                },
                this.state = {
                    title: 'i watch',
                    price: '9999',
                    qty: 1,
                    img:'',
                    id:''
                },
                this.state = {
                    title: 'mackbook',
                    price: '999999',
                    qty: 1,
                    img:'',
                    id:''
                }
            ]
        }
       
    
    }
    
   render(){
        const {products} = this.state;

    return(
        <div className="cart">
            {
            products.map((product)=>{
                return (
                    <CartItem
                      product={product}
                      key={product.id}
                    />
                  )
            })
            }
        </div>
    );
   }


}

export default Cart;