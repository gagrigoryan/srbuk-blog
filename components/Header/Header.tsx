import React from "react";
import Link from "next/link";
import styles from "./header.module.scss";

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <Link href="/">SRBUK.</Link>
                </div>
                <div className={styles.hamburger}>
                    <span />
                    <span />
                </div>
            </div>
        </div>
    );
};

export default Header;
