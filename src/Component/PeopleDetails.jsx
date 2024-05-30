import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadperson } from "../Store/Actions/PersonAction";
import Loader from "./Loader";
import { removeperson } from "../Store/Reducers/PeopleSlice";
import HorizontalCard from "./Partials/HorizontalCard";
import Dropdown from "./Partials/Dropdown";

function PeopleDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const [Category, setcategory] = useState("movie");
  useEffect(() => {
    dispatch(asyncloadperson(id));

    return () => {
      dispatch(removeperson());
    };
  }, [id]);

  const { information } = useSelector((state) => state.people);
  console.log(information);
  return information ? (
    <div className="px-[8%] w-screen h-[220vh] bg-[#1F1E24]">
      {/* part 1: Navbar */}
      <nav className="w-full h-[10vh] flex gap-10 items-center text-zinc-100 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-go-back-fill hover:text-[#6556CD] mr-2"
        ></Link>
      </nav>

      <div className="w-full flex ">
        {/*left poster and details */}
        <div className="w-[20%]">
          <img
            className="h-[40vh] w-full object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] "
            src={`https://image.tmdb.org/t/p/original/${information.detail.profile_path}
        `}
            alt=""
          />

          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
          <div className="flex items-center justify-around text-2xl font-bold text-white">
            <a
              href={`https://www.instagram.com/${information.externalid.instagram_id}`}
            >
              <i class=" hover:text-[#6556CD] duration-300 ri-instagram-fill"></i>
            </a>
            <a
              href={`https://www.wikidata.org/wiki/${information.externalid.wikidata_id}`}
            >
              <i className=" hover:text-[#6556CD] duration-300  ri-earth-fill"></i>
            </a>
            <a
              href={`https://www.twitter.com/${information.externalid.twitter_id}/`}
            >
              <i class=" hover:text-[#6556CD] duration-300  ri-twitter-x-fill"></i>
            </a>
            <a
              href={`https://www.facebook.com/${information.externalid.facebook_id}/`}
            >
              <i class="hover:text-[#6556CD] duration-300  ri-facebook-circle-fill"></i>
            </a>
          </div>

          <h1 className="font-semibold text-zinc-400 text-2xl my-5">
            Personal Info
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold">Known For</h1>
          <h1 className="text-zinc-400">
            {information.detail.known_for_department}
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Gender</h1>
          <h1 className="text-zinc-400">
            {information.detail.gender === 2 ? "Male" : "Female"}
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Birthday</h1>
          <h1 className="text-zinc-400">{information.detail.birthday}</h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">Deathday</h1>
          <h1 className="text-zinc-400">
            {information.detail.deathday
              ? information.detail.deathday
              : "Fucking Alive"}
          </h1>
          <h1 className="text-lg text-zinc-400 font-semibold mt-3">
            Place Of Birth
          </h1>
          <h1 className="text-zinc-400">{information.detail.place_of_birth}</h1>
        </div>

        {/* Details and other stuff */}
        <div className="w-[80%] ml-10">
          <h1 className="font-black text-zinc-400 text-6xl my-5">
            {information.detail.name}
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold">Biography</h1>
          <p className="text-zinc-400 mt-3">{information.detail.biography}</p>

          <h1 className="text-xl text-zinc-400 font-semibold mt-5">
            Moives And Shows
          </h1>

          <HorizontalCard data={information.combinedcredits.cast} />

          <div className="w-full flex justify-between items-center mt-10">
            <h1 className="text-xl text-zinc-400 font-semibold mt-5">
              Acting Career
            </h1>
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setcategory(e.target.value)}
            />
          </div>

          <div className=" list-disc w-full h-[50vh] mt-5 text-zinc-500 p-5 overflow-x-hidden overflow-y-auto shadow-[rbga(255,255,255,.3)] shadow-xl border-2 border-zinc-800">
            {information[
              Category === "movie" ? Category + "credit" : Category + "credits"
            ].cast.map((c, i) => (
              <li className="hover:text-white duration-300  p-3 hover:bg-[#19191d] cursor-pointer">
                <Link to={`/${Category}/details/${c.id}`}>
                  <span>
                    {c.name || c.title || c.original_title || c.original_name}
                  </span>
                  <span className="block">
                    {" "}
                    {c.character && `Character Name : ${c.character}`}
                  </span>
                </Link>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default PeopleDetails;
