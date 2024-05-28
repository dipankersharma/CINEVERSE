import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from './Partials/Navbar';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loader from './Loader';
import axios from '../Utils/Axios';
import Cards from './Partials/Cards';

function People() {

    const [people, setpeople] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    const navigate = useNavigate();
    document.title = "SCSDB | People"

    const GetPeople = async () => {
        try {
          const { data } = await axios.get(`person/popular
          `);
    
          if (data.results.length > 0) {
            setpeople((prev) => [...prev, ...data.results]);
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
        if (people.length === 0) {
            GetPeople();
        } else {
          setpage(1);
          setpeople([]);
          GetPeople();
        }
      };
    
      useEffect(() => {
        refreshHandler()
      }, []);
  console.log(people)
      return people.length>0 ? (

        <div className="w-screen h-screen">
          <div className="w-full flex items-center justify-between mb-10 px-[5%] ">
            <h1 className="w-[20%] font-semibold text-2xl text-zinc-400">
              <i
                onClick={() => navigate(-1)}
                className="ri-arrow-go-back-fill hover:text-[#6556CD] mr-2"
              ></i>{" "}
              People
            </h1>
            <div className="flex w-[80%] items-center">
              <Navbar />
            </div>
          </div>
          <InfiniteScroll
            dataLength={people.length}
            hasMore={hasMore}
            loader={<Loader/>}
            next={GetPeople}
          >
            <Cards title='person' data={people} />
          </InfiniteScroll>
        </div>
      ):(<Loader/>)
    }


export default People
