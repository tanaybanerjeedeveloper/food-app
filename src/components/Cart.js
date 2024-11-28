import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="w-6/12 m-auto text-center">
      <h1>Cart</h1>
      <button
        className="bg-black text-white rounded-lg m-auto px-4 py-2"
        onClick={handleClearCart}
      >
        Clear cart
      </button>
      {cartItems.length === 0 ? (
        <p>No cart items!</p>
      ) : (
        <ItemList items={cartItems} />
      )}
    </div>
  );
};

export default Cart;
