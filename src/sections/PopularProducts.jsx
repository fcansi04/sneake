import { products } from "../constants";
import PopularProductsCard from "../Componets/PopularProductsCard";
const PopularProducts = () => {
  return (
    <section id={products} className="max-container ">
      <div className="max-w-[400px]">
        <h2 className="text-2xl font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="text-slate-gray mt-4">
          Step into comfort and style with every stride,discover your perfect
          pair today!
        </p>
      </div>
      <div className="flex items-center justify-center md:justify-start">
        <div className="mt-10 grid lg:grid-cols-4 sm:grid-cols-2 gap-10  max-w-full">
          {products.map((product) => {
            return <PopularProductsCard key={product.name} {...product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
