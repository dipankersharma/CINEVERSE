import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Notfound from "../Notfound";

const Trailer = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector((state) => state[category].information.videos);
  console.log(ytvideo);
  return (
    <div className="text-white top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,.9)] flex items-center justify-center fixed">
      <Link
        onClick={() => navigate(-1)}
        className="ri-close-fill hover:text-[#6556CD] mr-2 text-2xl absolute right-[3%] top-[3%]"
      ></Link>
      {ytvideo ? (
        <ReactPlayer
          width={1300}
          height={600}
          url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
        />
      ) : (
        <Notfound />
      )}
    </div>
  );
};

export default Trailer;
