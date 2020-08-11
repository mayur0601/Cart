import React from 'react';

import Cart from './Cart';

import Navbar from './Navbar'

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products:[
            this.state = {
                title: 'i phone',
                price: '99999',
                qty: 1,
                img:'https://images.unsplash.com/photo-1577895202579-7280306572c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
                id:1
            },
            this.state = {
                title: 'i watch',
                price: '9999',
                qty: 1,
                img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                id:2
            },
            this.state = {
                title: 'laptop',
                price: '999999',
                qty: 1,
                img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80',
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

handlerDeleteCart = (id) =>{
   // console.log("trash",product);
    const {products} = this.state;
    //const index = products.indexOf(product);
    const items = products.filter((item)=>item.id!=id);


 //  products.splice(index,1);
    this.setState({

        products:items
    })
}

getCartCount = () => {
  const {products} = this.state;
  
  let count =0;
 products.forEach(product => {
   count+= product.qty;
 });

 return count;

}
getCartTotal = () => {
  const {products} = this.state;
  let total = 0;
  products.forEach(product => {

    total+= product.qty*product.price;
   
  });

  return total;
}

render(){
  
  const {products} = this.state;
  return (
    <div className="App">
      <Navbar count = {this.getCartCount()} />
     <Cart 
     products = {products}
      onincreaseQuantity = {this.handlerIncreaseqty}
      ondecreaseQuantity = {this.handlerDecreaseQuantity}
      ondeleteCart = {this.handlerDeleteCart}
     />
     <div style={{padding:10 ,fontSize:20}}>Total: {this.getCartTotal()}</div>
    </div>
  );
}
}
 

export default App;
