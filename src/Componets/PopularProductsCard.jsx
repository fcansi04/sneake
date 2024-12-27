import React from "react";

const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div>
      <img className="w-[15rem] h-[15rem] mb-2" src={imgURL} alt={name} />
      <div className="pl-1">
        <p className="mb-1">♥ (4.5)</p>
        <h2 className="mb-1">{name}</h2>
        <p className="text-coral-red font-bold">{price}</p>
      </div>
    </div>
  );
};

export default PopularProductsCard;
