import React from "react";
import { Link } from "react-router-dom";

const Header = ({ value }) => {

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${
          value.backdrop_path || value.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-full h-[55vh] p-16 flex flex-col justify-end items-start"
    >
      <h1 className=" w-[70%] text-5xl font-bold text-white mb-3">
      {value.name || value.title || value.original_title || value.original_name}
      </h1>
      <p className=" w-[70%] text-s text-white mb-3">{value.overview.slice(0,200)}....<Link to={`/${value.media_type}/detail/${value.id}`} className="text-blue-500">more</Link></p>
      <p className="text-white mb-2">
      <i className="ri-megaphone-fill text-yellow-500"></i>{value.release_date||"No information"}
      <i className="ri-album-fill text-yellow-500 ml-2"></i> {value.media_type.toUpperCase()}
      </p>
      <Link className="p-3 bg-[#6556CD] rounded-lg text-white font-semibold">Watch Trailer</Link>
    </div>
  );
};

export default Header;
