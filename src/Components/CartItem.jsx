import { FaTrash } from "react-icons/fa";
import FormatPrice from "../Helpers/FormatPrice";
import { useCartContext } from "../context/cart_context";
import CartAmoutToggle from "./CartAmoutToggle";

const CartItem = ({ id, name, image, color, price, amount }) => {
  const { removeProduct, setDecrease, setIncrease } = useCartContext();

  return (
    <>
      <div className="cart_heading grid grid-five-column">
        <div className="cart-image--name">
          <div>
            <figure>
              <img src={image} alt={id} />
            </figure>
          </div>
          <div>
            <p>{name}</p>
          </div>
          <div className="color-div">
            <p>color: </p>
            <div
              className="color-style"
              style={{ background: color, color: color }}
            ></div>
          </div>
        </div>
        <div className="cart-hide">
          <p>{<FormatPrice price={price} />}</p>
        </div>
        <div>
          <CartAmoutToggle
            amount={amount}
            setDecrease={() => setDecrease(id)}
            setIncrease={() => setIncrease(id)}
          />
        </div>
        <div className="cart-hide">
          <p>
            <FormatPrice price={price * amount} />
          </p>
        </div>
        <div>
          <FaTrash className="remove_icon" onClick={() => removeProduct(id)} />
        </div>
      </div>
    </>
  );
};

export default CartItem;
