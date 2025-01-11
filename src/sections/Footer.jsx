import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";
const Footer = () => {
  return (
    <section className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap min-w-[700px] max-sm:flex-col ">
        <div className="lg:flex-1 flex flex-col items-start gap-10">
          <a href="/">
            <img className="w-[10rem]" src={footerLogo} alt="" />
          </a>
          <p className="text-[14px] text-white-400 max-md:w-[60%]">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards.
          </p>
          <div className="flex gap-10">
            {socialMedia.map((item) => {
              return (
                <div key={item.alt}>
                  <a href="/">
                    <img
                      className="bg-white rounded-full p-1 "
                      src={item.src}
                    ></img>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:flex-1">
          <h4 className="text-white font-bold mb-6">Products</h4>
          <ul className="flex flex-col gap-2 text-white-400 text-[14px]">
            <li className="">
              <a href="">Air Force 1</a>
            </li>
            <li className="">
              <a href="">Air Max</a>
            </li>
            <li className="">
              <a href="">Air jordan 1</a>
            </li>
            <li className="">
              <a href="">Air force 2</a>
            </li>
            <li className="">
              <a href="">Waffle Racer</a>
            </li>
          </ul>
        </div>
        <div className="lg:flex-1">
          {" "}
          <h4 className="text-white font-bold mb-6">Help</h4>
          <ul className="flex flex-col gap-2 text-white-400 text-[14px]">
            <li className="">
              <a href="">About us</a>
            </li>
            <li className="">
              <a href="">FAQs</a>
            </li>
            <li className="">
              <a href="">How it works</a>
            </li>
            <li className="">
              <a href="">Privacy Policy</a>
            </li>
            <li className="">
              <a href="">Payment Policy</a>
            </li>
          </ul>
        </div>
        <div className="lg:flex-1">
          <h4 className="text-white font-bold">Get in touch</h4>
          <ul className="text-white-400">
            <li>
              <a href="">customer@gmail.com</a>
            </li>
            <li>
              <a href="">+905466364807</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
