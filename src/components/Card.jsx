import React from "react";

const Card = (props) => {
  const {data,key}=props;
  console.log(props);
  
  
  
  return (
    <div >
      <div className="rounded-2xl shadow-lg bg-white overflow-hidden w-80">
        <img
          className="w-full h-60 object-cover"
          src={data.image}
          alt=""
        />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{data.brand}</h2>
          <p className="text-sm text-gray-600 mb-2">{data.category} | {data.color}</p>
          <div className="flex items-center justify-between">
            <span className="text-green-600 font-semibold">${data.price}</span>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {data.discount}% OFF
            </span>
          </div>
          <button className="px-2 py-1 bg-red-500 rounded-lg text-white mt-2">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
