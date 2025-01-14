import React from "react";

const Button = (props) => {
  return (
    <button
      type="button"
      className={`${
        props.label == "Sign Up" ? "absolute top-2 right-1" : ""
      } bg-coral-red text-white px-8 py-2 rounded-full flex justify-center items-center gap-2 hover:bg-black  active:opacity-80 `}
    >
      <span>{props.label}</span>
      <img
        className="flex justify-center items-center bg:none"
        src={props.iconURL}
        alt=""
      />
    </button>
  );
};

export default Button;
