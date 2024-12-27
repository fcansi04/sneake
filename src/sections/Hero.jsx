import Button from "../Componets/Button";
import arrowRight from "../assets/icons/arrow-right.svg";
import bigShoe1 from "../assets/images/big-shoe1.png";
import bigShoe2 from "../assets/images/big-shoe2.png";
import bigShoe3 from "../assets/images/big-shoe3.png";
import ShoeCard from "../Componets/ShoeCard";
import { shoes } from "../constants";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImage, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="Home"
      className="flex lg:flex-row flex-col justify-center min-h-screen w-full pb-20 p-2 gap-10 max-container  border-b-2 "
    >
      <div className="relative lg:w-1/2 flex flex-col justify-center items-start w-full max-xl:padding-x gap-10 xl:mt-40 max-xl:mt-20">
        <p className="text-coral-red ">Our Summer Collection</p>
        <h1 className="text-[60px] font-bold">
          <span>The New Arrival</span> <br />{" "}
          <span className="text-coral-red">Nike </span>Shoes
        </h1>
        <p className="text-[16px] w-3/5 text-slate-gray">
          Discover stylish nike arrivals,qulity comfort, and innovation for your
          active life.
        </p>
        <Button label="Show Now" iconURL={arrowRight} />
        <div className="w-full flex flex-row gap-[50px]">
          <div>
            <strong className="text-3xl">1k+</strong>
            <br />
            <span>Brands</span>
          </div>
          <div>
            <strong className="text-3xl">500+</strong>
            <br />
            <span>Shops</span>
          </div>
          <div>
            {" "}
            <strong className="text-3xl">250k+</strong>
            <br />
            <span>Customers</span>
          </div>
        </div>
      </div>

      <div className="relative lg:w-1/2 flex justify-center items-center w-full bg-pale-blue max-h-screen ">
        <img
          id="bigImage"
          className="w-3/5  "
          src={bigShoeImage}
          alt="shoe-collection"
        />
        <div
          className="lg:flex 
         object-contain lg:absolute z-10 lg:gap-6 bottom-5 max-lg:ml-[40px]  "
        >
          {shoes.map((shoe, index) => {
            return (
              <div key={shoe.thumbnail} className="max-lg:mb-2 ">
                <ShoeCard
                  imgURL={shoe.bigShoe}
                  changeBigShoeImage={(image) => {
                    setBigShoeImg(image);
                  }}
                  BigShoeImg={bigShoeImage}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
