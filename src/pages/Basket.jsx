import { useGlobalContext } from "../hooks/useGlobalContext";
import { formatPrice } from "../utils";
import BasketItem from "../components/BasketItem";

function Basket() {
  const { products, totalPrice, dispatch } = useGlobalContext();

  return (
    <div className="container">

      <h1 className="text-3xl  text-center my-8">Basket</h1>
      {products.length === 0 ? (
        <p className="text-2xl text-center mt-[100px] italic">
          No products in the basket!
        </p>
      ) : (
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="text-2xl font-semibold">
            Total Price: <span className="text-[#eb5971]">{formatPrice(totalPrice)}</span>
          </h3>
          <button
            onClick={() => dispatch({ type: "CLEAR", payload: products })}
            className="btn btn-outline btn-secondary"
          >
            Clear All
          </button>
          </div>

          {products.map((product) => {
            return (
              <>
              <BasketItem key={product.id} product={product} />
              </>
            )
          })}
        </div>
      )}

        
    </div>
  );
}

export default Basket;
