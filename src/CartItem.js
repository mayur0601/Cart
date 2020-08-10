import React from 'react';


class CartItem extends React.Component {

    constructor() {
        super();

        this.state = {
            title: 'i phone',
            price: '99999',
            qty: '1'
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this);
    }
    increaseQuantity = () => {
        console.log('this.state',this.state);
    }
    render() {

        const { title, price, qty } = this.state;
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