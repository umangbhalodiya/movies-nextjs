import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import PopularMovies from "./Components/PopularMovies/PopularMovies";
import PopularTvs from "./Components/PopularTvs/PopularTvs";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <Header />
      </Head>
      <PopularMovies />
      <PopularTvs />
      <Footer />
    </div>
  );
};

export default Home;
