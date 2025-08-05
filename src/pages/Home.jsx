import ProductList from "../components/ProductList";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const {
    data: products,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/product");

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
    <section className="container">
      {products && <ProductList products={products.products} />}z
    </section>
  );
}

export default Home;
