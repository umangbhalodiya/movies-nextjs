import React, { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";
import axios from "axios";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Link from "next/link";
import Image from "next/image";
const PopularMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMoviesData();
  }, []);

  const getPopularMoviesData = () => {
    axios
      .get(`https://imdb-api.com/en/API/MostPopularMovies/k_5gq0n13b`)
      .then((res: any) => {
        setMovies(res.data.items);
        console.log("moviesData", res.data.items);
      });
  };

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Get latest movies trailers, cast and updates here.
        </h1>
        <div className={styles.moviesheader}>
          <div className={styles.headerMovies}> Popular Movies</div>
          <Link href="allMovies/allMovies" passHref>
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
                  height="300px"
                  layout="responsive"
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
  );
};

export default PopularMovies;
