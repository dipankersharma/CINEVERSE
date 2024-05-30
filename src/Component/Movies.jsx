import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Partials/Navbar';
import Dropdown from './Partials/Dropdown';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';
import axios from '../Utils/Axios';
import Cards from './Partials/Cards';

const Movies = () => {
    const [movie, setmovie] = useState([]);
  const [category, setcategory] = useState("top_rated");
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  const navigate = useNavigate();
  document.title = "SCSDB | Movies"


  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`movie/${category}?page=${page}`);

      if (data.results.length > 0) {
        setmovie((prev) => [...prev, ...data.results]);
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
    if (movie.length === 0) {
        GetMovie();
    } else {
      setpage(1);
      setmovie([]);
      GetMovie();
    }
  };

  useEffect(() => {
    refreshHandler()
  }, [category]);

 return movie.length>0 ? (

    <div className="w-screen h-screen">
      <div className="w-full flex items-center justify-between mb-10 px-[5%] ">
        <h1 className="w-[20%] font-semibold text-2xl text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="ri-arrow-go-back-fill hover:text-[#6556CD] mr-2"
          ></i>{" "}
          Movies
        </h1>
        <div className="flex w-[80%] items-center">
          <Navbar />
          <Dropdown
            title={"categories"}
            options={["upcoming", "top_rated",'popular','now_playing']}
            func={(e) => setcategory(e.target.value)}
          />
        </div>
      </div>
      <InfiniteScroll
        dataLength={movie.length}
        hasMore={hasMore}
        loader={<Loader/>}
        next={GetMovie}
      >
        <Cards title="movie" data={movie} />
      </InfiniteScroll>
    </div>
  ):(<Loader/>)
}

export default Movies
