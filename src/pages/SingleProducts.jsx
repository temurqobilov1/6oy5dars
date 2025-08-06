import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { FaRegCircleXmark } from "react-icons/fa6";

function SingleProducts() {
  const { dispatch, products } = useGlobalContext();

  const { id } = useParams();
  const {
    data: prod,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/product/" + id);

  if (isPending) {
    return (
      <div className="flex items-center justify-center mt-60">
        <span className="loading loading-spinner loading-xl "></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center mt-60">
        <h1 className="text-2xl italic">{error}</h1>
      </div>
    );
  }
  const handleSubmit = () => {
    const item = products.find((product) => product.id == prod.id);

    if (item) {
      dispatch({ type: "INCREASE_AMOUNT", payload: prod.id });
    } else {
      dispatch({ type: "ADD_PRODUCT", payload: { ...prod, amount: 1 } });
    }
  };
  const handleClose = () => {
    history.back(); 
  };
  return (
    <>
      <h2 className="text-center text-3xl my-7">ProducList</h2>
      {prod && (
        <div className="flex items-center justify-between p-10 shadow-xl/30 max-w-4xl mx-auto rounded-2xl">
          <div className="w-[40%]">
            <img className="" src={prod.thumbnail} alt="Album" />
          </div>
          <div className=" w-[60%]">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl mb-3">{prod.title}</h2>
              <button onClick={handleClose} className="mt-[-90px] text-2xl hover:cursor-pointer"><FaRegCircleXmark /></button>
            </div>
            <p className="text-3xl font-bold mb-3 text-[#eb5971]">
              $<span className="text-3xl">{prod.price}</span>
            </p>
            <p className="mb-3">{prod.description}</p>
            <p className="text-xl font-bold">
              Brand:{" "}
              <span className="font-normal italic text-[#00a9e7]">
                {prod.brand}
              </span>
            </p>
            <div className="flex mt-4 justify-between">
              <p className="text-xl font-bold">
                Rating:{" "}
                <span className="font-bold text-2xl text-[#eb5971]">
                  {prod.rating}
                </span>
              </p>
              <button
                onClick={handleSubmit}
                className="btn btn-outline btn-info"
              >
                Add to Basket
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProducts;
