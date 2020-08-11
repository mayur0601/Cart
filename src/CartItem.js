import React from 'react';


class CartItem extends React.Component {

    constructor() {
        super();

       
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    decreseQuantity = () => {

        const {qty} = this.state;

        if(qty==1){
            return;
        }
        this.setState({
            qty: this.state.qty - 1
        })
    }
    increaseQuantity = () => {
        // console.log('this.state',this.state);


        //set state form 1
        this.setState({
            qty: this.state.qty + 1
        });

        //set state form 2 if prevState is available
        // this.setState((prevState)=>{
        //     return{
        //         qty: prevState.qty+1
        //     }
        // });
    }
    render() {

        console.log('this.props', this.props);
         const { price, title, qty } = this.props.product;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price}</div>
                    <div style={{ color: '#777' }}>Qty :{qty} </div>
                    <div className="cart-item-actions">
                        {/* buttons */}

                        <img
                         alt="increase" 
                         className="action-icons" 
                         src="https://as2.ftcdn.net/jpg/03/22/32/37/500_F_322323723_HJb8d1u2NuI8dMAjvC62TXbSqn63vpI3.jpg"
                         onClick={this.increaseQuantity} 
                         />

                        <img 
                        alt="decrease" 
                        className="action-icons" 
                        src="https://as2.ftcdn.net/jpg/03/16/36/03/500_F_316360373_uWcj5rZxsUbmoAogMfow8EZhUOn7FTM0.jpg"
                        onClick={this.decreseQuantity}
                         />

                        <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://as2.ftcdn.net/jpg/01/90/89/15/500_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
                         />

                    </div>
                </div>
            </div>
        );
    }


}


const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4
    }
}

export default CartItem;