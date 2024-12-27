import React from "react";

const ShoeCard = ({ imgURL, changeBigShoeImage, BigShoeImg }) => {
  const handleClickk = () => {
    if (BigShoeImg !== imgURL) {
      changeBigShoeImage(imgURL);
    }
  };

  return (
    <div
      className={`flex justify-center items-center  gap-4  bg-center bg-cover md:w-30 md:h-30  cursor-pointer max-sm:w-24 max-sm:h-24  `}
      onClick={handleClickk}
    >
      <img
        src={imgURL}
        alt={imgURL}
        className={`bg-card w-[130px] rounded-[30px] p-3  ${
          BigShoeImg == imgURL
            ? "border-2 border-coral-red "
            : "border-transparent"
        }`}
      />
    </div>
  );
};

export default ShoeCard;
