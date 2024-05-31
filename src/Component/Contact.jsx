import React from "react";

const Contact = () => {
  return (
    <div className="w-screen h-screen px-[8%] py-[2%]">
      <h1 className="text-7xl font-bold text-zinc-400 text-center">
        How Can i help you?
      </h1>
      {/* two container 1st for form second for form */}
      <div className="flex w-full h-[80vh] justify-between mt-10">
        <div className="w-[49%]  flex flex-col items-center">
          <h1 className="text-2xl text-zinc-400 font-bold mb-5">Contact us</h1>
          <div className="w-full flex gap-10 flex-wrap shrink-0">
            <div className="w-[28vh] h-[28vh] rounded-lg mr-5 mb-5 text-[#6556CD] hover:text-white hover:bg-[#6556CD] duration-300 flex flex-col items-center shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] bg-black-700">
              <span className="text-xl font-semibold m-5  ">
                Contact number
              </span>
              <i className=" text-4xl mb-5 ri-phone-fill"></i>
              <span className="text-xl font-semibold ">8292002331</span>
            </div>
            <div className="w-[28vh] h-[28vh] rounded-lg mr-5 mb-5 text-[#6556CD] hover:text-white hover:bg-[#6556CD] duration-300 flex flex-col items-center shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] ">
              <span className="text-xl font-semibold m-5  ">Email</span>
              <i className=" text-4xl mb-5 ri-mail-fill"></i>
              <span className="text-xl font-semibold "></span>
            </div>
            <div className="w-[28vh] h-[28vh] mr-5 mb-5 shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]">
              instagram
            </div>
            <div className="w-[28vh] h-[28vh] shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)]">
              instagram
            </div>
          </div>
        </div>

        <div className="w-[49%] bg-red-100 flex flex-col items-center">
          queery form
        </div>
      </div>
    </div>
  );
};

export default Contact;
