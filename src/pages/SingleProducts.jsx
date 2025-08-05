import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";

function SingleProducts() {
  const { id } = useParams();
  const {
    data: product,
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
  return (
    <>
      <h2 className="text-center text-3xl my-7">ProducList</h2>
      {product && (
        <div className="flex items-center justify-between p-10 shadow-xl/30 max-w-4xl mx-auto rounded-2xl">
          <div className="w-[40%]">
            <img className="" src={product.thumbnail} alt="Album" />
          </div>
          <div className=" w-[60%]">
            <h2 className="text-4xl mb-3">{product.title}</h2>
            <p className="text-3xl font-bold mb-3 text-[#eb5971]">
              $<span className="text-3xl">{product.price}</span>
            </p>
            <p className="mb-3">{product.description}</p>
            <p className="text-xl font-bold">
              Brand:{" "}
              <span className="font-normal italic text-[#00a9e7]">
                {product.brand}
              </span>
            </p>
            <div className="flex mt-4 justify-between">
              <p className="text-xl font-bold">
                Rating:{" "}
                <span className="font-bold text-2xl text-[#eb5971]">
                  {product.rating}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProducts;
