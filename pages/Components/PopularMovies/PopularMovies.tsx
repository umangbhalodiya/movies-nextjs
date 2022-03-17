import React, { useEffect, useState } from "react";
import styles from "../../../styles/Home.module.css";
import axios from "axios";
import { SwiperSlide, Swiper } from "swiper/react";
import data from "../../../movies.json";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMoviesData();
  }, []);

  const getPopularMoviesData = () => {
    // axios
    //   .get(`https://imdb-api.com/en/API/MostPopularMovies/k_4usbx0ow`)
    //   .then((res: any) => {
    //     setMovies(res.data.items);
    //     console.log("moviesData", res.data.items);
    //   });
  };

  return (
    <div>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Get latest movies trailers, cast and updates here.
          </h1>
          <div className={styles.moviesheader}>
            <div className={styles.headerMovies}> Popular Movies</div>
            <div>See All</div>
          </div>
          <div className={styles.grid}>
            {data?.slice(0, 7).map((movie: any) => {
              return (
                <a className={styles.card}>
                  <img
                    className={styles.movieposter}
                    alt=""
                    width="200px"
                    src={movie?.image}
                  />
                  <p>{movie.fullTitle}</p>
                  <div className={styles.ratings}>
                    <div>{movie.imDbRating}</div> <StarRoundedIcon />
                  </div>
                </a>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PopularMovies;
