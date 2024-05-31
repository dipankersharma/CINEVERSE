import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { asyncloadseason } from "../Store/Actions/SeasonAction";
import { removeSeason } from "../Store/Actions/SeasonAction";
import Loader from "./Loader";
import noimage from "../../public/noimage.png";

const SeasonDetails = () => {
  const { id, number } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    dispatch(asyncloadseason(id, number));
    return () => {
      dispatch(removeSeason());
    };
  }, [number, id]);

  const { information } = useSelector((state) => state.season);
  console.log(information);
  return information ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.5),rgba(0,0,0,.7)),url(https://image.tmdb.org/t/p/original/${
          information.detail.backdrop_path || information.detail.poster_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="w-screen bg-[#1F1E24] px-[5%] relative h-[200vh]"
    >
      {/* part-1 Navpart */}
      <nav className="w-full h-[10vh] fixed flex gap-10 items-center text-zinc-100 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-go-back-fill hover:text-[#6556CD] mr-2"
        ></Link>
        <a
          href={`https://www.wikidata.org/wiki/${information.externalid.wikidata_id}`}
        >
          <i className="ri-earth-fill"></i>
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
              ({information.detail.air_date.split("-")[0]})
            </small>
          </h1>

          <div className="w-full flex items-center mt-2 font-semibold">
            <span className=" text-semibold text-white ml-2">
              <i className="ri-calendar-schedule-fill text-yellow-400"></i>{" "}
              {information.detail.air_date}
            </span>
          </div>
          <div className="mt-5 flex items-center gap-10">
            <span className="text-white font-bold ">
              <i class=" text-yellow-500 mr-1 ri-star-fill"></i>
              {information.detail.vote_average} Rating
            </span>
          </div>

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

          {/* Episodes part */}
          <h1 className="mt-10 text-2xl text-zinc-400 font-semibold">
            All Episode
          </h1>
          <div className=" flex  w-[100%] overflow-y-hidden p-5 ">
            {information.detail.episodes.length > 0 ? (
              information.detail.episodes.map((item, i) => (
                <Link className="w-[15vh] mr-[15%]" key={i}>
                  <h1 className="text-zinc-300 w-[14vw] font-semibold text-lg mb-2">
                    Episode {item.episode_number}
                  </h1>

                  <img
                    className="min-w-[14vw] h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] mb-2 "
                    src={
                      item.backdrop_path || item.poster_path || item.still_path
                        ? `https://image.tmdb.org/t/p/original/${
                            item.backdrop_path ||
                            item.poster_path ||
                            item.still_path
                          }
        `
                        : noimage
                    }
                    alt=""
                  />
                  <h1 className="text-zinc-300 w-[14vw] font-semibold text-lg">
                    {item.name ||
                      item.title ||
                      item.original_title ||
                      item.original_name}
                  </h1>
                </Link>
              ))
            ) : (
              <h1 className="font-black text-2xl text-white">
                Nothing to show here
              </h1>
            )}
          </div>

          {/* Cast part */}
          <h1 className="mt-10 text-2xl text-zinc-400 font-semibold">
            Star Cast
          </h1>
          <div className=" flex  w-[100%] overflow-y-hidden p-5 ">
            {information.credits.cast.length > 0 ? (
              information.credits.cast.map((item, i) => (
                <Link
                  to={`/person/details/${item.id}`}
                  className="w-[15vh] mr-[15%]"
                  key={i}
                >
                  <img
                    className="min-w-[14vw] h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] mb-2 "
                    src={
                      item.backdrop_path ||
                      item.poster_path ||
                      item.profile_path
                        ? `https://image.tmdb.org/t/p/original/${
                            item.backdrop_path ||
                            item.profile_path ||
                            item.still_path
                          }
        `
                        : noimage
                    }
                    alt=""
                  />
                  <h1 className="text-zinc-300 w-[14vw] font-semibold text-lg">
                    {item.name ||
                      item.title ||
                      item.original_title ||
                      item.original_name}
                  </h1>
                </Link>
              ))
            ) : (
              <h1 className="font-black text-2xl text-white">
                Nothing to show here
              </h1>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default SeasonDetails;
