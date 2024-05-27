import axios from "../../Utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from '../../../public/noimage.png'

const Navbar = () => {
  // this use state is used for storing the input from input field
  const [querry, setquerry] = useState("");

  // this use state is used for set the api data to link tag
  const [searches, setsearches] = useState([]);

  const getSearches = async () => {
    try {
      // here we call the database through api and we provide input which we store in querry for searching
      const response = await axios.get(`/search/multi?query=${querry}`);
      setsearches(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearches();
  }, [querry]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start ml-[12%] items-center">
      <i className=" text-zinc-400 text-3xl ri-search-eye-line"></i>
      <input
        onChange={(e) => setquerry(e.target.value)}
        value={querry}
        type="text"
        className="w-[50%] mx-10 p-3 outline-none rounded-lg bg-transparent text-zinc-400"
        placeholder="Search Anything"
      />

      {querry.length > 0 && (
        <i
          onClick={() => setquerry("")}
          className=" text-zinc-400 text-3xl ri-close-circle-fill cursor-pointer"
        ></i>
      )}
      <div className="bg-zinc-200 search w-[50%] max-h-[50vh] absolute top-[90%] overflow-auto">
        {searches.map((s, i) => (
          <Link
            key={i}
            className=" hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 font-semibold w-[100%] p-5 flex justify-start items-center border-b-2 border-zinc-100"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5"
              src={ s.backdrop_path || s.profile_path ?  `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`: noimage}
              alt=""
            />
            <span>
              {s.name || s.title || s.original_title || s.original_name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
