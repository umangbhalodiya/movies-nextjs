import React, { useState, useEffect } from "react";
// import "../Header/Header.scss";
import "../../styles/Home.module.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const Header = () => {
  const [searchData, setSearchData] = useState<any>();
  const [movies, setMovies] = useState([]);

  useEffect(() => {}, []);

  const searchMoveis = () => {
    axios
      .get(`https://imdb-api.com/en/API/Search/k_5gq0n13b/${searchData}`)
      .then((res: any) => {
        // setMovies(res.data.items);
        console.log("moviesData", res.data);
      });
  };

  return (
    <div>
      <header>
        <div className="container">
          <div className="header-alignment">
            <div className="website-name"> Moobiess</div>
            <div className="search-class">
              <div className="container">
                <input
                  placeholder="Search..."
                  className="js-search"
                  type="text"
                  onChange={(e) => {
                    setSearchData(e.target.value);
                    searchMoveis();
                  }}
                />
                <div className="search-icon">submit</div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
