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
    <Link to={`/singleProduct/${product.id}`}>
      <ul className="mt-20 flex flex-col gap-5">
        <li className="card bg-base-200 shadow-sm hover:shadow-xl/20">
          <div className="flex items-center justify-between p-5">
            <img
              className="w-40 h-40 rounded-2xl"
              src={product.thumbnail}
              alt=""
            />
            <div>
              <h3 className="text-2xl font-bold mb-3">{product.title}</h3>
              <p className="text-xl font-mono">
                Brand:{" "}
                <span className="italic font-normal">{product.brand}</span>
              </p>
            </div>
            <div>
              <p className="text-xl font-mono mb-3 ">
                Price:{" "}
                <span className=" font-bold text-[#00a9e7]">
                  {formatPrice(product.price * product.amount)}
                </span>
              </p>
              <p className="text-xl font-mono">
                Rating:{" "}
                <span className="font-bold text-[#eb5971]">
                  {product.rating}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-3 ">
              <button onClick={increment} className="btn btn-outline btn-info">
                +
              </button>
              <span className="cart-amount font-bold text-xl">
                {product.amount}
              </span>
              <button onClick={decrement} className="btn btn-outline btn-error">
                -
              </button>
            </div>
          </div>
        </li>
      </ul>
    </Link>
  );
}

export default BasketItem;
