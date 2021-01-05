import React from "react";

import Link from "next/link";
import styles from "./banner.module.scss";
import Arrow from "../icons/Arrow";

const Banner: React.FC = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.caption}>
                <div className={styles.line}>
                    <span className="BannerSpan">Lorem ipsum dolor sit</span>
                </div>
                <div className={styles.line}>
                    <span className="BannerSpan">perfe quas vel.</span>
                </div>
            </h2>
            <div className={styles.link}>
                <Link href={"/"}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a>
                        More about us <Arrow />
                    </a>
                </Link>
            </div>
        </section>
    );
};

export default Banner;
