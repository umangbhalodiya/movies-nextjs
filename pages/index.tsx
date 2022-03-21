import React, { useEffect, useState } from "react";
import PopularMovies from "../Components/PopularMovies/PopularMovies";
import PopularTvs from "../Components/PopularTvs/PopularTvs";
import styles from "../styles/Home.module.css";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

const Home = () => {
  const [searchData, setSearchData] = useState<any>();
  const [movies, setMovies] = useState([]);
  const [databox, setDatabox] = useState(false);

  useEffect(() => {
    document.title = "Moobiess";
    // setAtitle("BlueBird | Order");
  }, []);

  const searchMoveis = () => {
    axios
      .get(`https://imdb-api.com/en/API/SearchTitle/k_5gq0n13b/${searchData}`)
      .then((res: any) => {
        setMovies(res.data.results);
        console.log("moviesData", res.data.results);
        setDatabox(true);
      });
  };
  return (
    <div className={styles.container}>
      <header>
        <div className="header-alignment">
          <div className="website-name"> Moobiess</div>
          <div className="search-class">
            <div className="continer">
              <input
                placeholder="Search..."
                className="js-search"
                type="text"
                onChange={(e) => {
                  setSearchData(e.target.value);
                }}
              />
              <div
                className="searchicon"
                onClick={() => {
                  searchMoveis();
                }}
              >
                <SearchIcon style={{ marginLeft: "10px", color: "#fff" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="search-div">
          {databox && (
            <>
              <div className="search-movies">
                <div className="results-header">
                  <div className="">Results :</div>
                  <div
                    onClick={() => {
                      setDatabox(false);
                    }}
                  ></div>
                  <div
                    onClick={() => {
                      setDatabox(false);
                    }}
                  >
                    <CloseIcon
                      style={{ marginRight: "10px", cursor: "pointer" }}
                    />
                  </div>
                </div>
                {movies.map((movie: any, i) => {
                  var movi = movie.title.search(/Undefined/);
                  return (
                    <div
                      key={i}
                      className="single-movie"
                      onClick={() => {
                        setDatabox(false);
                      }}
                    >
                      {movie.title
                        ? movie.title.replace(movi, "")
                        : movie.title}
                      &nbsp;
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </header>

      <PopularMovies />

      <PopularTvs />
    </div>
  );
};

export default Home;
