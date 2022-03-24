import React from 'react';
import Product from '../Product/Product';
import './Cart.css';

const Cart = ({cart}) => {
    // const {cart} = props;
    console.log(cart);
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const GrandTotal = total + shipping + tax;
   

    return (
        <div className='cart'>
            <h4>orders summary</h4>
            <p>Selected Items:{cart.length}</p>
            <p>Price:${total}</p>
            <p>Shipping Charge:${shipping}</p>
            <p>Tax:{tax}</p>
            <h5>Grand Total:{GrandTotal}</h5>
        </div>
    );
};

export default Cart;