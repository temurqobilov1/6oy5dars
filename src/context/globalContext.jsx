import { useEffect, useReducer, createContext } from "react";

export const GlobalContext = createContext();

// Default shape of our state
const defaultState = {
  user: true,
  products: [],       // basket/cart items
  likedProducts: [],  // liked/favorite items
  totalAmount: 0,
  totalPrice: 0,
};

// Load from localStorage but ensure missing keys are filled in
const initialState = () => {
  try {
    const saved = localStorage.getItem("products");
    return saved ? { ...defaultState, ...JSON.parse(saved) } : defaultState;
  } catch (err) {
    console.error("Failed to load state from localStorage", err);
    return defaultState;
  }
};

const changeState = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state.products, payload] };

    case "INCREASE_AMOUNT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === payload
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      };

    case "DECREASE_AMOUNT":
      return {
        ...state,
        products: state.products
          .map((product) =>
            product.id === payload
              ? { ...product, amount: Math.max(0, product.amount - 1) }
              : product
          )
          .filter((product) => product.amount > 0),
      };

    case "CHANGE_AMOUNT_PRICE":
      return {
        ...state,
        totalAmount: payload.amount,
        totalPrice: payload.price,
      };

    case "CLEAR":
      if (!window.confirm(`Rostan ham ushbu ma'lumotlarni ochirmoqchimisiz?`)) {
        return state;
      }
      return { ...state, products: [] };

    case "ADD_LIKED":
      return {
        ...state,
        likedProducts: [...state.likedProducts, payload],
      };

    case "REMOVE_LIKED":
      return {
        ...state,
        likedProducts: state.likedProducts.filter((p) => p.id !== payload),
      };

    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, initialState());

  useEffect(() => {
    let price = 0;
    let amount = 0;

    state.products.forEach((product) => {
      price += product.amount * product.price;
      amount += product.amount;
    });

    dispatch({ type: "CHANGE_AMOUNT_PRICE", payload: { price, amount } });

    // Save only necessary parts to localStorage
    localStorage.setItem(
      "products",
      JSON.stringify({
        products: state.products,
        likedProducts: state.likedProducts,
        user: state.user,
        totalAmount: state.totalAmount,
        totalPrice: state.totalPrice,
      })
    );
  }, [state.products, state.likedProducts]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
