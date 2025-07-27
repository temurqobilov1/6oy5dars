import { Link } from "react-router-dom";

function Product({ prod }) {
  return (
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
            <button className="btn btn-outline btn-info">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
