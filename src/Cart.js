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
                    id:1
                },
                this.state = {
                    title: 'i watch',
                    price: '9999',
                    qty: 1,
                    img:'',
                    id:2
                },
                this.state = {
                    title: 'mackbook',
                    price: '999999',
                    qty: 1,
                    img:'',
                    id:3
                }
            ]
        }

    
    }

    handlerIncreaseqty = (product) =>{
            console.log("increase the qty of",product);
            const {products} = this.state;
            const index = products.indexOf(product);

            products[index].qty+=1;

            this.setState({
                products:products
            })
    }
    handlerDecreaseQuantity = (product) =>{
        console.log(product);
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty==1){
            return;
        }
        products[index].qty -= 1;

        this.setState({
            products:products
        })
    }

    handlerDeleteCart = (product) =>{
        console.log("trash",product);
        const {products} = this.state;
        const index = products.indexOf(product);
       products.splice(index,1);
        this.setState({
            products:products
        })
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
                      onincreaseQuantity = {this.handlerIncreaseqty}
                      ondecreaseQuantity = {this.handlerDecreaseQuantity}
                      ondeleteCart = {this.handlerDeleteCart}
                    />
                  )
            })
            }
        </div>
    );
   }


}

export default Cart;