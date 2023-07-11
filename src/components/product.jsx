import React, { useContext } from 'react';
import { ShopContext } from '../context/shop-context';

const Product = (props) => {
  const { id, productName, price, productImage } = props.data || {};

  const {addToCart, cartItems} = useContext(ShopContext)

  const cartItemAmount = cartItems[id]

  return (
    <div className='product'>
      <img src={productImage} alt={productName} />
      <div className='description'>
        <p>
          <b className='product-name'>{productName}</b>
        </p>
        <p className='product-price'>${price}</p>
      </div>
      <button onClick={() => addToCart(id)}>
        Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
    </div>
  );
};

export default Product;
