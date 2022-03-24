import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    // const{props,handleAddToCart} = props;
    // console.log(props.product);
    // const {name, img, seller, price, ratings} = props.product||{} //support team;
    const {product, handleAddToCart} = props;
    // const {name, img, seller, price, ratings} = props.product;
    const {name, img, seller, price, ratings} = product;
   
    // console.log(props);
    return (        
        <div className='product'>
             <img src={img} alt="" ></img> 
             <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price:${price}</p>
                <p><small>Manufacturer:{seller}</small></p>
                <p><small>Rating:{ratings}*</small></p>
                
             </div>
             {/* <button onClick={() => props.handleAddToCart(props.product)} className='btn-cart'> */}
             <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                 <p>Add to Cart</p>
                 <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
             </button>
               
        </div>
    );
};

export default Product;