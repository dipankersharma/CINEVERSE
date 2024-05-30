import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const HorizontalCard = ({ data }) => {
  return (
    <div className=" flex  w-[100%] h-[48vh] overflow-y-hidden p-3">
      {data.map((item, i) => (
        <Link to={`/${item.media_type}/details/${item.id}`}
          className="text-white min-w-[18%] mr-5 mb-5 bg-zinc-900 rounded-lg "
          key={i}
        >
          <img
            className=" rounded-t-lg w-full h-[55%] object-cover "
            src={`https://image.tmdb.org/t/p/original/${
              item.backdrop_path || item.poster_path
            }`}
            alt=""
          />

          <div className="text-white p-3 h-[45%]">
            {" "}
            <h1 className="text-xl font-semibold mb-2">
              {item.title ||
                item.name ||
                item.original_name ||
                item.original_title}
            </h1>
            <p className=" text-s text-white ">
              {item.overview.slice(0, 30)}....
              <Link className="text-blue-500">more</Link>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCard;
