import React from "react";

function ItemCard() {
  return (
    <div className="flex flex-col items-center justify-center col-span-1">
      <div className="relative p-5">
        <div className="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-blue-50" />
        <img
          className="relative z-20 w-full rounded-full"
          src="https://cdn.devdojo.com/images/june2021/avt-03.jpg"
        />
      </div>
      <div className="mt-3 space-y-2 text-center">
        <div className="space-y-1 text-lg font-medium leading-6">
          <h3>Freddy Smith</h3>
          <p className="text-blue-600">CEO and Founder</p>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
