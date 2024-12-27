import React from "react";

const ServicesCard = ({ imgURL, label, subtext }) => {
  return (
    <div className=" shadow-2xl p-8 py-20 rounded-[20px]">
      <img
        className="bg-coral-red rounded-full p-2 mb-8 max-w-full  "
        src={imgURL}
        alt={label}
      />
      <h2 className="font-bold text-lg mb-10">{label}</h2>
      <p className="font-montserrat text-slate-gray">{subtext}</p>
    </div>
  );
};

export default ServicesCard;
