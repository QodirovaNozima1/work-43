import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const Manage = () => {
  return (
    <div className="w-full bg-white h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className=" object-cover  ">
        <FaRegUserCircle className="text-6xl" />
        </div>
        <b>Nozima Qodirova</b>
        <p>
          <b>99-000-00-00</b>
        </p>
      </div>
    </div>
  );
};

export default Manage;