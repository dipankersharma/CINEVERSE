import React from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen h-[120vh] bg-[#1F1E24] px-[10%]">
      {/* part 1: Navbar */}
      <nav className="w-full h-[10vh] flex gap-10 items-center text-zinc-100 text-xl">
        <Link
          onClick={() => navigate(-1)}
          className="ri-arrow-go-back-fill hover:text-[#6556CD] mr-2"
        ></Link>
      </nav>

      <div className="w-full flex ">
        {/*left poster and details */}
        <div className="">
          <img
            className="h-[50vh] w-full rounded-full object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] "
            src="/me.jpg"
            alt=""
          />

          <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
          <div className="flex items-center justify-around text-2xl font-bold text-white">
            <a href="https://www.instagram.com/_dipankar_sharma/">
              <i class=" hover:text-[#6556CD] duration-300 ri-instagram-fill"></i>
            </a>
            <a href="https://www.facebook.com/dipanker.kumar.712/">
              <i class=" hover:text-[#6556CD] duration-300 ri-facebook-circle-fill"></i>
            </a>
            <a href="https://x.com/Dipanker_Sharm">
              <i class=" hover:text-[#6556CD] duration-300 ri-twitter-x-fill"></i>
            </a>
            <a href="https://www.linkedin.com/in/dipanker-kumar-518b4a236/">
              <i class=" hover:text-[#6556CD] duration-300 ri-linkedin-fill"></i>
            </a>
          </div>
        </div>

        {/* Details and other stuff */}
        <div className="w-[80%] ml-10">
          <h1 className="font-black text-zinc-400 text-6xl my-5">
            Dipanker Kumar
          </h1>
          <h1 className="text-xl text-zinc-400 font-semibold">
            Front end Project
          </h1>
          <p className="text-zinc-400 mt-3">
            Project Overview: The Movie and TV Series Website is a comprehensive
            online platform designed to provide users with extensive information
            about TV series and movies. This project aims to create an engaging,
            user-friendly experience where visitors can explore a vast database
            of film and television content, discover new releases, and access
            detailed information about their favorite shows and movies. Key
            Features: Extensive Database: A vast collection of TV series and
            movies from various genres, countries, and time periods. Detailed
            information on each title, including synopsis, cast, crew, release
            dates, ratings, and reviews. User Accounts: User registration and
            login functionalities. Personalized profiles where users can track
            watched content, create watchlists, and receive recommendations
            based on their viewing history. Search and Filter Options: Advanced
            search functionality to easily find specific titles. Filters to
            narrow down searches by genre, release year, rating, and more.
            Reviews and Ratings: User-generated reviews and ratings for TV
            series and movies. Aggregated ratings from major review platforms
            like IMDb, Rotten Tomatoes, and Metacritic. Recommendations:
            Personalized recommendations based on user preferences and viewing
            history. Trending and popular titles highlighted on the homepage.
            Trailers and Clips: Access to official trailers, teasers, and clips
            for movies and TV series. Integration with platforms like YouTube
            for seamless video playback. Community Engagement: Discussion forums
            and comment sections for users to engage with each other. Social
            media integration to share favorite titles and reviews. Responsive
            Design: Fully responsive website design for optimal viewing on
            desktops, tablets, and mobile devices. Technologies Used: Front-End:
            HTML, CSS, JavaScript, React/Vue.js Back-End:it is fully Api based
            frontend project i used TMBD Api service for making this project
            Goals and Objectives: Create an intuitive and appealing user
            interface. Provide accurate and up-to-date information on a wide
            range of TV series and movies. Foster a community of film and TV
            enthusiasts through interactive features. Implement robust search
            and recommendation algorithms to enhance user experience. Target
            Audience: Movie and TV series enthusiasts of all ages. Individuals
            looking for recommendations and detailed information on films and
            shows. Users seeking a community to discuss and review media
            content. This project will deliver a one-stop destination for all
            things related to TV series and movies, ensuring an immersive and
            informative experience for users.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
