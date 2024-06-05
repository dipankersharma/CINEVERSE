import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Partials/Navbar";
import Dropdown from "./Partials/Dropdown";
import Cards from "./Partials/Cards";
import Loader from "./Loader";
import axios from "../Utils/Axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();

  const [duration, setduration] = useState("day");
  const [categories, setcategories] = useState("all");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "CINEVERSE | Trending";
  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${categories}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        settrending((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        hasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      setpage(1);
      settrending([]);
      getTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [duration, categories]);
  return trending.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between mb-10 px-[5%] ">
        <h1 className="w-[20%] font-semibold text-2xl text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-go-back-fill hover:text-[#6556CD] mr-2"
          ></i>{" "}
          Trending
        </h1>
        <div className="flex w-[70%] items-center bg-">
          <Navbar />
          <Dropdown
            title={"categories"}
            options={["all", "movie", "tv"]}
            func={(e) => setcategories(e.target.value)}
          />
          <div className="w-[2%]"></div>
          <Dropdown
            title={"Durations"}
            options={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={trending.length}
        hasMore={hasMore}
        next={getTrending}
        loader={<h1>Loading...</h1>}
      >
        <Cards title={categories} data={trending} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loader />
  );
};

export default Trending;
