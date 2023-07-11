import Photo from '../assets/2.png';

const CartItem = () => {

  return (
    <div className="cart-item">
      <img src={Photo} alt="photo" />
      <p className="product-name">Macbook</p>
      <p className="product-price">999$</p>
      <div className="count">
        <button>-</button>
        <input type="text" />
        <button>+</button>
      </div>
    </div>
  );
};

export default CartItem;
