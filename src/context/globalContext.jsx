import { useEffect, useReducer } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, payload] };

    case "INCREASE_AMOUNT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id == payload
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      };
    case "DECREASE_AMOUNT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id == payload
           ? { ...product, amount: Math.max(0, product.amount - 1) }
              : product
          )
          .filter((product) => product.amount > 0)
      };
    case "CHANGE_AMOUNT_PRICE":
      return {
        ...state,
        totalAmount: payload.amount,
        totalPrice: payload.price,
      };
    case "CLEAR":
      return {
        user: true,
        products: [],
        totalAmount: 0,
        totalPrice: 0,
      };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    user: true,
    products: [],
    totalAmount: 0,
    totalPrice: 0,
  });

  useEffect(() => {
    let price = 0;
    let amount = 0;

    state.products.forEach((product) => {
      price += Math.round(product.amount * product.price);
      amount += product.amount;
    });

    dispatch({ type: "CHANGE_AMOUNT_PRICE", payload: { price, amount } });
  }, [state.products]);
  console.log(state);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
