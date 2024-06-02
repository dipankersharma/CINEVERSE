import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const name = useRef(null);
  const phonenumber = useRef(null);
  const email = useRef(null);
  const text = useRef(null);
  const handle = (e) => {
    // e.preventDefault();
    alert("Thanks for your queery");
  };

  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen px-[8%] py-[2%]">
      <i
        onClick={() => navigate(-1)}
        className="ri-arrow-go-back-fill hover:text-[#6556CD] mr-2 fixed text-white text-2xl hover:text-[#6556CD]"
      ></i>
      <h1 className="text-6xl font-bold text-zinc-400 text-center">
        How Can i help you?
      </h1>
      {/* two container 1st for form second for form */}
      <div className="flex w-full h-[75vh] justify-between mt-10">
        <div className="w-[49%]  flex flex-col">
          <h1 className="text-2xl text-zinc-400 font-bold mb-10 ml-[28%]">
            Contact us
          </h1>
          <div className="w-full flex gap-10 flex-wrap shrink-0">
            <div className="w-[28vh] h-[28vh] rounded-lg mr-5 mb-5 text-[#6556CD] hover:text-white hover:bg-[#6556CD] duration-300 flex flex-col items-center shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] bg-black-700">
              <span className="text-xl font-semibold m-5  ">
                Contact number
              </span>
              <i className=" text-4xl mb-5 ri-phone-fill"></i>
              <span className="text-xl font-semibold ">8292002331</span>
            </div>
            <div className="w-[28vh] h-[28vh] rounded-lg mr-5 mb-5 text-[#6556CD] hover:text-white hover:bg-[#6556CD] duration-300 flex flex-col items-center shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] ">
              <span className="text-xl font-semibold m-5">Email</span>
              <i className=" text-4xl mb-5 ri-mail-fill"></i>
              <div className=" flex flex-wrap flex-col font-semibold w-[25vh] word-wrap text-sm">
                dipankar.kr2005@gmail.com
              </div>
            </div>
            <div className="w-[28vh] h-[28vh] mr-5 mb-5 rounded shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] text-[#6556CD] hover:text-white hover:bg-[#6556CD] duration-300 flex flex-col items-center">
              <span className="text-xl font-semibold m-5">Social Media</span>
              <div className="flex w-full flex-wrap ml-[35%] text-2xl gap-x-20 gap-y-10">
                <a href="https://www.instagram.com/_dipankar_sharma/">
                  <i class="ri-instagram-fill"></i>
                </a>
                <a href="https://www.facebook.com/dipanker.kumar.712/">
                  <i class="ri-facebook-circle-fill"></i>
                </a>
                <a href="https://www.facebook.com/dipanker.kumar.712/">
                  <i class="ri-twitter-x-fill"></i>
                </a>
                <a href="https://www.facebook.com/dipanker.kumar.712/">
                  <i class="ri-linkedin-fill"></i>
                </a>
              </div>
            </div>
            <div className="w-[28vh] h-[28vh] mr-5 mb-5 rounded shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] text-[#6556CD] hover:text-white hover:bg-[#6556CD] duration-300 flex flex-col items-center">
              <span className="text-xl font-semibold m-5">Address</span>
              <p className="text-xl font-semibold ">Shyam Nagar</p>
              <p className="text-xl font-semibold ">jehanbad,Bihar</p>
              <p className="text-xl font-semibold ">India (804408)</p>
            </div>
          </div>
        </div>

        <div className="w-[45%]  flex flex-col items-center ">
          <h1 className="text-2xl text-zinc-400 font-bold mb-5 tex-center">
            Queery Form
          </h1>
          <div className="w-[80%] h-[70vh] rounded shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] ">
            <form
              className="w-full flex gap-y-5 flex-col p-10 "
              action=""
              onSubmit={handle}
            >
              <input
                className="p-3 outline-none rounded-lg"
                type="text"
                placeholder="Your name"
                ref={name}
              />
              <input
                className="p-3 outline-none rounded-lg"
                type="email"
                name=""
                id=""
                placeholder="Email"
                ref={email}
              />
              <input
                className="p-3 outline-none rounded-lg"
                type="number"
                name=""
                id=""
                placeholder="Phone number"
                ref={phonenumber}
              />
              <textarea
                className="p-3 h-[25vh] outline-none rounded-lg"
                placeholder="Write Your queery"
                ref={text}
              />
              <input
                type="submit"
                value="Submit"
                className="px-4 py-3 rounded-lg cursor-pointer text-white bg-[#6556CD]"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
