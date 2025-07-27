import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

function Home() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios("https://dummyjson.com/product")
      .then(({ data }) => setProducts(data.products))
      .catch((error) => console.log(error.message));
  }, []);

  return <>
  <section className="container"> 
    <h2 className="text-3xl mb-8 mt-5 ml-5">Products:</h2>
    {products && <ProductList products={products} />}
    </section>;
  </>;
}

export default Home;
