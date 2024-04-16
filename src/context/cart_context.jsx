import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducers/CartReducers";

const getLocalStorage = () => {
  let newCartData = localStorage.getItem("cart");
  // if (newCartData == []) {
  //   return [];
  // } else {
  //   return JSON.parse(newCartData);
  // }
  const parsedData = JSON.parse(newCartData);
  if (!Array.isArray(parsedData)) return [];
  return parsedData;
};

const initialState = {
  cart: getLocalStorage(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  // remove product

  const removeProduct = (id) => {
    dispatch({ type: "REMOVE_CART", payload: id });
  };

  //   clear product

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  //   incremnet cart data

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREASE", payload: id });
  };
  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREASE", payload: id });
  };

  // to add the data in localStorage
  useEffect(() => {
    // dispatch({type: "CART_TOTAL_ITEM"})
    // dispatch({type: "CART_TOTAL_PRICE"})
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeProduct,
        clearCart,
        setDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
