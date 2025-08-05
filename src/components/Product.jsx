import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Product({ prod }) {
  const { dispatch, products } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const item = products.find((product) => product.id == prod.id);

    if (item) {
      dispatch({ type: "INCREASE_AMOUNT", payload: prod.id });
    } else {
      dispatch({ type: "ADD_PRODUCT", payload: { ...prod, amount: 1 } });
    }
  };
  return (
    <>
      <Link to={`/singleProduct/${prod.id}`}>
        <div className="card bg-base-100 w-full shadow-xl hover:shadow-xl/20 cursor-pointer">
          <figure>
            <img className="h-50" src={prod.thumbnail} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title line-clamp-1">{prod.title}</h2>
            <p className="line-clamp-2">{prod.description}</p>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-[#eb5971]">${prod.price}</p>
              <button
                onClick={handleSubmit}
                className="btn btn-outline btn-info"
              >
                Add to Basket
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Product;
