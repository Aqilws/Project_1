import React from "react";

export const Service = () => {
  return (
    <div className="h-[300px] flex flex-col justify-center items-center gap-4" id="service">
      <h1 className="text-5xl font-bold">Top values for you</h1>
      <p>Try varienty of benefit when using our services</p>
      <div className="flex justify-around gap-10 mt-5">
        <div className="w w-52 flex flex-col justify-center items-center gap-2">
          <div className="w-11 h-11 bg-slate-400 flex justify-center items-center rounded-full text-white">✈</div>
          <h2 className="font-semibold">Airport pickup</h2>
          <p>We provide escort from the airport to the hotel</p>
        </div>
        <div className="w w-52 flex flex-col justify-center items-center gap-2">
          <div className="w-11 h-11 bg-slate-400 flex justify-center items-center rounded-full text-white">💵</div>
          <h2 className="font-semibold">Easy booking</h2>
          <p>We provide escort from the airport to the hotel</p>
        </div>
        <div className="w w-52 flex flex-col justify-center items-center gap-2">
          <div className="w-11 h-11 bg-slate-400 flex justify-center items-center rounded-full text-white">🙍‍♂️</div>
          <h2 className="font-semibold">Best tour guide</h2>
          <p>We provide escort from the airport to the hotel</p>
        </div>
      </div>
    </div>
  );
};
