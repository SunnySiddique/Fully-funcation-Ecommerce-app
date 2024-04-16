const CartReducers = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, color, amount, product } = action.payload;

      let existionProduct = state.cart.find(
        (curElem) => curElem.id === id + color
      );

      if (existionProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === id + color) {
            let newAmount = curElem.amount + amount;
            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            }
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return curElem;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct = {
          id: id + color,
          name: product.name,
          color,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };

        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    case "REMOVE_CART":
      let updatedCart = state.cart.filter(
        (curPro) => curPro.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "SET_DECREASE":
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let decAmount = curElem.amount - 1;

          if (decAmount <= 1) {
            decAmount = 1;
          }

          return {
            ...curElem,
            amount: decAmount,
          };
        } else {
          return curElem;
        }
      });

      return { ...state, cart: updatedProduct };

    case "SET_INCREASE":
      let updatedProducts = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let IncreAmount = curElem.amount + 1;

          if (IncreAmount >= curElem.max) {
            IncreAmount = curElem.max;
          }

          return {
            ...curElem,
            amount: IncreAmount,
          };
        } else {
          return curElem;
        }
      });

      return { ...state, cart: updatedProducts };

    case "CART_ITEM_PRICE_TOTAL":
      let { total_item, total_price } = state.cart.reduce(
        (accum, curElem) => {
          let { price, amount } = curElem;

          accum.total_item += amount;
          accum.total_price += price * amount;

          return accum;
        },
        {
          total_item: 0,
          total_price: 0,
        }
      );

      return {
        ...state,
        total_item,
        total_price,
      };
  }

  return state;
};

export default CartReducers;
