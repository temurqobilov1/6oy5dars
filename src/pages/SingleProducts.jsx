import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProducts() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios("https://dummyjson.com/product/" + id)
      .then(({ data }) => setProduct(data))
      .catch((error) => console.log(error.message));
  }, [id]);
  return (
    <>
      {product && (
        <div className="flex items-center justify-between p-10 shadow-xl/30 mt-20 max-w-4xl mx-auto rounded-2xl">
          <div className="w-[40%]">
            <img className="" src={product.thumbnail} alt="Album"/>
          </div>
          <div className=" w-[60%]">
            <h2 className="text-4xl mb-3">{product.title}</h2>
            <p className="text-3xl font-bold mb-3 text-[#eb5971]">
              $<span className="text-3xl">{product.price}</span>
            </p>
            <p className="mb-3">{product.discription}</p>
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
              <button className="btn btn-outline btn-info">Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SingleProducts;
