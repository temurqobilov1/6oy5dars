import { Link } from "react-router-dom"; 
import { useGlobalContext } from "../hooks/useGlobalContext";
import { formatPrice } from "../utils";

function BasketItem({ product }) {
  const { dispatch } = useGlobalContext();

  const increment = (e) => {
    e.preventDefault();
    dispatch({
      type: "INCREASE_AMOUNT",
      payload: product.id,
    });
  };

  const decrement = (e) => {
    e.preventDefault();
    dispatch({
      type: "DECREASE_AMOUNT",
      payload: product.id,
    });
  };

  return (
    <Link
      to={`/singleProduct/${product.id}`} 
      className="flex items-center justify-between p-3 rounded-xl mb-4 shadow-xl hover:shadow-xl/20 cursor-pointer"
    >
      <div>
        <img src={product.thumbnail} alt={product.title} width={150} />
      </div>
      <div>
        <h2 className="text-2xl font-medium">{product.title}</h2>
        <p className="text-xl font-semibold">
          Price: <span className="text-[#eb5971]">{formatPrice(product.price * product.amount)}</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        <button className="btn btn-outline btn-secondary" onClick={decrement}>
          -
        </button>

        <p className="text-xl font-bold">{product.amount}</p>

        <button className="btn btn-outline btn-info" onClick={increment}>
          +
        </button>
      </div>
    </Link>
  );
}

export default BasketItem;
