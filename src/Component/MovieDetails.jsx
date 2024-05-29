import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie, removeMovie } from "../Store/Actions/MovieAction";
import Loader from "./Loader";

function MovieDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));

    return () => {
      dispatch(removeMovie());
    };
  }, []);

  const { information } = useSelector((state) => state.Movie);
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
      className="w-screen h-screen px-[5%]"
    >
      {/* part-1 Navpart */}
      <nav className="w-full h-[10vh] flex gap-10 items-center text-zinc-100 text-xl">
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

      {/* Part-2 Poster and detail */}


      <div className="w-full flex mt-10 ml-10">
        <img
          className="h-[40vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] "
          src={`https://image.tmdb.org/t/p/original/${
            information.detail.backdrop_path || information.detail.poster_path
          }
        `}
          alt=""
        />

        <div className="content ml-10">
          <h1 className="text-6xl text-white font-black">{information.detail.name || information.detail.title ||information.detail.original_title ||information.detail.original_name} <small className="text-2xl font-bold text-zinc-200">({information.detail.release_date.split("-")[0]})</small></h1>
          <p className="mt-2 text-zinc-100 text-l">Plot: {information.detail.overview}</p>
        </div>
      </div>




      {/* Part-3 available */}
      <div className="w-[80%] ml-10 flex flex-col gap-y-5  mt-5">

        {/* Available on platform */}
        {information.watchproviders && information.watchproviders.flatrate && (
          <div className="flex gap-5 items-center">
            <h1 className="text-zinc-200 text-xl">Available on Platform</h1>
            {information.watchproviders.flatrate.map((w) => (
              <img
              title={w.provider_name}
                className="w-[7vh] h-[7vh] object-cover rounded-lg"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
              />
            ))}
          </div>
        )}
        {information.watchproviders && information.watchproviders.rent && (
          <div className="flex gap-5 items-center">
            <h1 className="text-zinc-200 text-xl">Available on Rent</h1>
            {information.watchproviders.rent.map((w) => (
              <img
              title={w.provider_name}
                className="w-[7vh] h-[7vh] object-cover rounded-lg"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
              />
            ))}
          </div>
        )}
        {information.watchproviders && information.watchproviders.buy && (
          <div className="flex gap-5 items-center">
            <h1 className="text-zinc-200 text-xl">Available to buy</h1>
            {information.watchproviders.buy.map((w) => (
              <img
              title={w.provider_name}
                className="w-[7vh] h-[7vh] object-cover rounded-lg"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default MovieDetails;
