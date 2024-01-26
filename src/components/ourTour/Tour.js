import React, { useEffect, useState } from "react";

export const Tour = () => {
  const [travel, setTravel] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/travel")
      .then((res) => res.json())
      .then((json) => setTravel(json));
  }, []);
  return (
    <div className="mt-10">
      <h1 className="text-3xl md:text-5xl font-bold mt-10 text-start ml-10">Choose Your tour</h1>
      <div className=" mt-5 p-10 inline-grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
        {travel.map((item) => (
          <div className="w-60 flex flex-col hover:skew-x-2 hover:scale-105">
            <img src={item.img} alt="#" className="mb-5 rounded-xl h-40" />
            <h1 className="font-semibold">{item.name}</h1>
            <h3>${item.price}/Person</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
