import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./Partials/Dropdown";
import Navbar from "./Partials/Navbar";
import Cards from "./Partials/Cards";
import axios from "../Utils/Axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

function Popular() {
  const [popular, setpopular] = useState([]);
  const [category, setcategory] = useState("movie");
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  const navigate = useNavigate();
  document.title = "SCSDB | Popular"

  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);

      if (data.results.length > 0) {
        setpopular((prev) => [...prev, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }

    } catch (error) {
      (error) => {
        console.log(error);
      };
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setpage(1);
      setpopular([]);
      GetPopular();
    }
  };

  useEffect(() => {
    refreshHandler()
  }, [category]);
 console.log(popular)
  return popular.length>0 ? (

    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between mb-10 px-[5%] ">
        <h1 className="w-[20%] font-semibold text-2xl text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-go-back-fill hover:text-[#6556CD] mr-2"
          ></i>{" "}
          Popular
        </h1>
        <div className="flex w-[80%] items-center">
          <Navbar />
          <Dropdown
            title={"categories"}
            options={["movie", "tv"]}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={popular.length}
        hasMore={hasMore}
        loader={<Loader/>}
        next={GetPopular}
      >
        <Cards title={category} data={popular} />
      </InfiniteScroll>
    </div>
  ):(<Loader/>)
}

export default Popular;
