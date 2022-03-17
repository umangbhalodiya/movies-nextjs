import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import styles from "../../styles/Home.module.css";
import image from "next/image";
import data from "../../movies.json";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Link from "next/link";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import axios from "axios";
import Image from 'next/image'

function AllPopularMovies() {
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
    <div className={styles.container}>
      <Head>
        <Header />
      </Head>
      <Link href="/" passHref>
        <ChevronLeftIcon
          style={{
            margin: "15px",
            color: "#000",
            cursor: "pointer",
            backgroundColor: "white",
            borderRadius: "50px",
          }}
        />
      </Link>
      <main className={styles.main}>
        <div className={styles.grid}>
          {movies?.map((movie: any,i) => {
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
  );
}
export default AllPopularMovies;
