import React from "react";
import { Link } from "react-router-dom";

function Cards({ data,title }) {
  return (
    <div className="w-full flex flex-wrap justify-around">
      {data.map((data, i) => (
        <Link  className="w-[30vh] mr-[5%] mb-[5%]"  key={i}>
            <img className="w-full h-[45vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] mb-2" src={`https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.poster_path}
        `} alt="" />
        <h1 className="text-zinc-300 font-semibold text-xl">

          {data.name || data.title || data.original_title || data.original_name}
        </h1>
        </Link>
      ))}
    </div>
  );
}

export default Cards;
