import React from 'react';
import CartItem from './cartItem';

const Product = (props) => {
  const { productName, price, productImage } = props.data || {};

  const addToCart = () => {
    const itemData = props.data;
    console.log(itemData)
    return <CartItem data={itemData} />;
  };

  return (
    <div className='product'>
      <img src={productImage} alt={productName} />
      <div className='description'>
        <p>
          <b className='product-name'>{productName}</b>
        </p>
        <p className='product-price'>${price}</p>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
