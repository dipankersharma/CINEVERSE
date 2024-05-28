import React from "react";
import { Link } from "react-router-dom";

function Cards({ data ,title}) {
  
  return (
    <div className="w-full flex flex-wrap justify-around px-[5%] bg-[#1F1E24]">
      {data.map((item, i) => (
        <Link to={`/${item.media_type||title}/details/${item.id}`} className="w-[30vh] mr-[5%] mb-[5%] relative"  key={i}>
            <img className="w-full h-[45vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] mb-2" src={`https://image.tmdb.org/t/p/original/${
          item.backdrop_path || item.poster_path||item.profile_path
        }
        `} alt="" />
        <h1 className="text-zinc-300 font-semibold text-xl">

          {item.name || item.title ||item.original_title ||item.original_name}
        </h1>
       <div className="h-[6vh] w-[6vh] text-white font-semibold rounded-full flex justify-center items-center bg-yellow-600 absolute bottom-[27%] right-[-8%]" >{(item.vote_average*10||item.popularity).toFixed()}<sup>%</sup></div>

        </Link>
      ))}
    </div>
  );
}

export default Cards;
