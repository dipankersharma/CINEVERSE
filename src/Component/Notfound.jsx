import React from "react";
import error from "../../public/new.gif";

const Notfound = () => {
  return (
    <div>
      <div className="w-screen h-screen bg-black flex justify-center items-center">
        <img src={error} alt="" />
      </div>
    </div>
  );
};

export default Notfound;
