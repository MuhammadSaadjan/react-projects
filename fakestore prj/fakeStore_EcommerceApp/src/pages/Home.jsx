import React, { useContext } from "react";
//import product context
import { ProductContext } from "../contexts/ProductContext";

//import components
import Product from "../components/Product";
import Hero from "../components/Hero";

const Home = () => {
  // get products from products context
  const { products } = useContext(ProductContext);

  // get only men and women category items
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <div>
      <Hero />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return (
                // <div className=" bg-pink-200 w-full h-[300px]" key={product.id}>
                //   {product.title}
                // </div>
                <Product product={product} key={product.id} />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
