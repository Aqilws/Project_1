import React, { useEffect, useState } from "react";

export const Content = () => {
  const [travel, setTravel] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/travel")
      .then((res) => res.json())
      .then((json) => setTravel(json));
  }, []);

  return (
    <div className="mt-10 p-5">
      <h1 className="text-5xl font-bold mt-10 text-start">Choose Your tour</h1>
      <div className=" mt-5 p-10 grid grid-cols-5">
        {travel.map((item) => (
          <div className="w-60 flex flex-col ">
            <img src={item.img} alt="#" className="mb-5 rounded-xl h-40" />
            <h1 className="font-semibold">{item.name}</h1>
            <h3>${item.price}/Person</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
