import React, { useState, useEffect } from "react";
import styles from "../../../styles/Home.module.css";
import data from "../../../tvs.json";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import axios from "axios";
const PopularTvs = () => {
  const [profileMenu, setProfileMenu] = useState(false);
  console.log("----------------", data);
  useEffect(() => {
    getPopularMoviesData();
  }, []);

  const getPopularMoviesData = () => {
    // axios
    //   .get(`https://imdb-api.com/en/API/MostPopularTVs/k_4usbx0ow`)
    //   .then((res: any) => {
    //   setMovies(res.data.items);
    //     console.log("tvs", res.data.items);
    //   });
  };
  return (
    <div>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.populartvs}>Popular Tvs</div>
          <div className={styles.moviesheader}>
            <div className={styles.headerMovies}> </div>
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

export default PopularTvs;
