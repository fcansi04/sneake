import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section>
      <div className="w-[30rem] my-0 mx-auto mb-10">
        <h2 className="font-bold text-center mb-3 text-3xl">
          What Our <span className="text-coral-red">Customers </span>Say?
        </h2>
        <p className=" text-center text-slate-gray">
          Hear Geniune stories from our satisfied customers about their
          exceptional experiences with us
        </p>
      </div>

      <div className="flex h-[15rem] max-md:flex-col max-md:h-[30rem] max-md:mt-20">
        {reviews.map((item) => {
          return (
            <div
              key={item.customerName}
              className={`${
                item.customerName == "Morich Brown" ? "max-md:border-b-2 " : ""
              }flex flex-col items-center justify-center flex-1 text-slate-gray`}
            >
              <img
                className="h-[5rem] rounded-[50%] mb-2"
                src={item.imgURL}
                alt={item.customerName}
              />
              <p className="text-center mb-2">{item.feedback}</p>
              <span>♥{item.rating}</span>
              <h4 className="font-bold">{item.customerName}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CustomerReviews;
