import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadmovie, removeMovie } from "../Store/Actions/MovieAction";
import HorizontalCard from "../Component/Partials/HorizontalCard";
import Loader from "./Loader";

function MovieDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    dispatch(asyncloadmovie(id));

    return () => {
      dispatch(removeMovie());
    };
  }, [id]);

  const { information } = useSelector((state) => state.movie);
  console.log(information);

  return information ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5),rgba(0,0,0,.9)),url(https://image.tmdb.org/t/p/original/${
          information.detail.backdrop_path || information.detail.posters_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-screen  h-[130vh] px-[5%] relative"
    >
      {/* part-1 Navpart */}
      <nav className="w-full h-[10vh] fixed flex gap-10 items-center text-zinc-100 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-go-back-fill hover:text-[#6556CD] mr-2"
        ></Link>
        <a href={information.detail.homepage}>
          <i className="ri-external-link-fill"></i>
        </a>
        <a
          href={`https://www.wikidata.org/wiki/${information.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
        </a>
        <a
          className="w-[10vh] h-[5vh] flex items-center justify-center bg-yellow-400 text-2xl text-black font-black tracking-tighter rounded"
          href={`https://www.imdb.com/title/${information.externalid.imdb_id}/`}
        >
          IMDb
        </a>
      </nav>
      {/* Two conatiner first for poster and second for detail */}
      <div className="flex ">
        {/* poster and available platform */}
        <div className="w-[25%] flex flex-col fixed top-[12%] justify-center  ">
          <img
            className="h-[50vh] w-[45vh]  object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] "
            src={`https://image.tmdb.org/t/p/original/${
              information.detail.backdrop_path || information.detail.poster_path
            }
        `}
            alt=""
          />
          <div className=" flex flex-col gap-y-2  mt-3">
            {information.watchproviders &&
              information.watchproviders.flatrate && (
                <div className="flex flex-col gap-2">
                  <h1 className="text-zinc-200 text-lg">
                    Available on Platform
                  </h1>
                  <div className="flex gap-2">
                    {" "}
                    {information.watchproviders.flatrate.map((w) => (
                      <img
                        title={w.provider_name}
                        className="w-[6vh] h-[6vh] object-cover rounded-lg"
                        src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                      />
                    ))}
                  </div>
                </div>
              )}
            {information.watchproviders && information.watchproviders.rent && (
              <div className="flex flex-col gap-2 ">
                <h1 className="text-zinc-200 text-lg">Available on Rent</h1>
                <div className="flex gap-2">
                  {" "}
                  {information.watchproviders.rent.map((w) => (
                    <img
                      title={w.provider_name}
                      className="w-[6vh] h-[6vh] object-cover rounded-lg"
                      src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    />
                  ))}
                </div>
              </div>
            )}
            {information.watchproviders && information.watchproviders.buy && (
              <div className="flex flex-col gap-2 ">
                <h1 className="text-zinc-200 text-lg">Available to buy</h1>
                <div className="flex gap-2">
                  {" "}
                  {information.watchproviders.buy.map((w) => (
                    <img
                      title={w.provider_name}
                      className="w-[6vh] h-[6vh] object-cover rounded-lg"
                      src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Detail container */}

        <div className="content ml-[28%] w-[75%] mt-[6%]">
          <h1 className="text-6xl text-white font-black">
            {information.detail.name ||
              information.detail.title ||
              information.detail.original_title ||
              information.detail.original_name}{" "}
            <small className="text-2xl font-bold text-zinc-200">
              ({information.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="w-full flex items-center mt-2 font-semibold">
            {information.detail.adult === true ? (
              <span className="w-[7vh] h-[4vh] flex items-center text-xl justify-center text-zinc-400 font-black border-2 rounded border-zinc-400 bg-transparent hover:bg-zinc-300 hover:text-black duration-300">
                A+
              </span>
            ) : (
              <span className="w-[7vh] h-[4vh] flex items-center text-xl justify-center text-zinc-400 font-black border-2 rounded border-zinc-400 bg-transparent hover:bg-zinc-300 hover:text-black duration-300">
                UA
              </span>
            )}
            <span className=" text-semibold text-white ml-2">
              <i className="ri-calendar-schedule-fill text-yellow-400"></i>{" "}
              {information.detail.release_date}
            </span>
            <span className=" text-white flex items-center ml-2">
              <i class=" text-[9px] ri-circle-fill mr-1"></i>
              {information.detail.genres.map((g, i) => g.name).join(",")}
            </span>
            <span className="text-white ml-2">
              <i class="text-[#6556CD] ri-play-circle-fill mr-1"></i>
              {information.detail.runtime}Min
            </span>
          </div>
          <div className="mt-5 flex items-center gap-10">
            <div className="flex  items-center">
              <div className="h-[9vh] w-[9vh] bg-[#424242] rounded-full relative flex items-center justify-center">
                <span className="w-[7vh] h-[7vh] rounded-full bg-red-400 absolute flex items-center text-lg justify-center text-white font-bold">
                  {information.detail.popularity.toFixed()}{" "}
                </span>
              </div>
              <span className="text-lg text-white font-bold ml-2">
                <h2>User</h2>
                <h2>Score</h2>
              </span>
            </div>
            <span className="text-white font-bold ">
              <i class=" text-yellow-500 mr-1 ri-star-fill"></i>
              {information.detail.vote_average} Rating
            </span>
          </div>
          <h1 className="text-white text-2xl mt-5 italic">
            {information.detail.tagline}
          </h1>
          <p className="mt-2 mb-5 text-zinc-100 text-l flex flex-col gap-3">
            <span className="text-2xl font-semibold ">Overview</span>{" "}
            <span>{information.detail.overview}</span>
          </p>
          <Link
            to={`${pathname}/trailer`}
            className=" px-3 py-1 rounded-lg bg-white text-[#6556CD] text-2xl hover:text-white hover:bg-[#6556CD] duration-300"
          >
            <i class="  ri-play-fill"></i>Trailer
          </Link>
          <h1 className="mt-10 text-2xl text-zinc-400 font-semibold">
            You might be interested in
          </h1>
          <HorizontalCard
            data={
              information.recommendations.length > 0
                ? information.recommendations
                : information.similar
            }
          />
        </div>
      </div>
      <Outlet />
    </div>
  ) : (
    <Loader />
  );
}

export default MovieDetails;
