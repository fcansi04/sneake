import { shoe8 } from "../assets/images";
import Button from "../Componets/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="relative max-container sm:flex xl:gap-40 pb-40 border-b-2"
    >
      <div className="flex-1">
        <h4 className="text-[2.6rem] font-bold ">
          We Provide You <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h4>
        <p className="text-slate-gray mt-3">
          Step into a world of style, comfort, and quality with our exclusive
          collection of footwear. Whether you're looking for trendy sneakers,
          elegant formal shoes, or durable outdoor boots, we've got something
          for everyone.
          <br />
          <br />
          Explore the latest designs from top brands at unbeatable prices.
        </p>
        <div className="mt-20">
          <Button label="Wiew details" />
        </div>
      </div>
      <div className="flex-1 max-md:hidden max-sm:right-[80px] ">
        <img className="md:w-[400px]" src={shoe8} alt="" />
      </div>
    </section>
  );
};

export default SuperQuality;
