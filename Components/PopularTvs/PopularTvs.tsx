import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import data from "../../tvs.json";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Link from "next/link";
import axios from "axios";
import Image from 'next/image'
const PopularTvs = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getPopularMoviesData();
  }, []);

  const getPopularMoviesData = () => {
    axios
      .get(`https://imdb-api.com/en/API/MostPopularTVs/k_5gq0n13b`)
      .then((res: any) => {
        setMovies(res.data.items);
        console.log("tvs", res.data.items);
      });
  };
  return (
    <div>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.populartvs}>Popular Tvs</div>
          <div className={styles.moviesheader}>
            <div className={styles.headerMovies}> </div>
            <Link href="allTvs/allTvs" passHref>
              <div className={styles.seeall}>See All</div>
            </Link>
          </div>
          <div className={styles.grid}>
            {movies?.slice(0, 7).map((movie: any, i) => {
              return (
                <a className={styles.card} key={i}>
                  <Image
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
