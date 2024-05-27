import React from "react";

const Header = ({ value }) => {
  console.log(value);
  return (
    <div
      style={{
        background: ` url(https://image.tmdb.org/t/p/original/${
          value.backdrop_path || value.profile_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        opacity: 0.4,
      }}
      className="w-full h-[55vh] mt-5"
    ></div>
  );
};

export default Header;
