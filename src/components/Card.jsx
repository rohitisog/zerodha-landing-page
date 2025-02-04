import React from "react";

const Card = ({ heading, paragraph, buttonData ,imgSrc}) => {
  return (
    <>
      <div className=" text-center">
        <img
          className="px-10 md:px-48 lg:px-96 py-4 lg:mt-8"
          src={imgSrc}
          alt=""
        />

        <h1 className="text-5xl py-2">{heading}</h1>
        <p className="text-neutral-700 py-2 lg:text-xl">{paragraph} </p>
        <button className="bg-sky-600 text-white px-6 py-3 my-10 font-semibold hover:bg-black">
          {buttonData}{" "}
        </button>
      </div>
    </>
  );
};

export default Card;
