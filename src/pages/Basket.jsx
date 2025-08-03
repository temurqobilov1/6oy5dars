import { useGlobalContext } from "../hooks/useGlobalContext";

function Basket() {
  const { products, totalPrice, dispatch } = useGlobalContext();

  return (
    <div className=" container ">
      <h1 className="text-3xl  text-center my-8">Basket</h1>
      {products.length === 0 ? (
        <p className="text-2xl text-center mt-[100px] italic">
          No products in the basket!
        </p>
      ) : (
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center justify-between mb-1.5">
            <h3 className="text-2xl font-semibold">
            Total Price: <span className="text-[#eb5971]">${totalPrice}</span>
          </h3>
          <button
            onClick={() => dispatch({ type: "CLEAR", payload: products })}
            className="btn btn-outline btn-secondary"
          >
            Clear All
          </button>
          </div>
          {products.map((product) => (
            <div key={product.id} className=" flex items-center justify-between p-3 rounded-xl mb-4 shadow-xl hover:shadow-xl/20 cursor-pointer">
              <div>
                <img src={product.thumbnail} alt="" width={150} />
              </div>
              <div className="">
                <h2 className="text-2xl font-medium">{product.title}</h2>
                <p className="text-xl font-semibold">
                  Price:{" "}
                  <span className="text-[#eb5971]">${product.price}</span>
                </p>
              </div>
              <div className=" flex items-center gap-3">
                <button
                  className="btn btn-outline btn-secondary"
                  onClick={() =>
                    dispatch({ type: "DECREASE_AMOUNT", payload: product.id })
                  }
                >
                  -
                </button>
                <p className="text-xl font-bold">{product.amount}</p>
                <button
                  className="btn btn-outline btn-info"
                  onClick={() =>
                    dispatch({ type: "INCREASE_AMOUNT", payload: product.id })
                  }
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Basket;
