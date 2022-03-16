import React, { useState } from "react";
import styles from "../../../styles/Home.module.css";

const PopularMovies = () => {
    const [profileMenu, setProfileMenu] = useState(false);
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
                        <a href="https://nextjs.org/docs" className={styles.card}>
                            <h2>Documentation</h2>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </a>

                        <a href="https://nextjs.org/docs" className={styles.card}>
                            <h2>Documentation</h2>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </a>

                        <a href="https://nextjs.org/docs" className={styles.card}>
                            <h2>Documentation</h2>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </a>

                        <a href="https://nextjs.org/docs" className={styles.card}>
                            <h2>Documentation</h2>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </a>

                        <a href="https://nextjs.org/docs" className={styles.card}>
                            <h2>Documentation</h2>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </a>

                        <a href="https://nextjs.org/docs" className={styles.card}>
                            <h2>Documentation</h2>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </a>

                        <a href="https://nextjs.org/docs" className={styles.card}>
                            <h2>Documentation</h2>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </a>

                        <a href="https://nextjs.org/docs" className={styles.card}>
                            <h2>Documentation</h2>
                            <p>Find in-depth information about Next.js features and API.</p>
                        </a>


                    </div>
                </main>
            </div>
        </div>
    );
};

export default PopularMovies;
