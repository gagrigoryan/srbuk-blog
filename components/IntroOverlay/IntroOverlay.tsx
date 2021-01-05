import React from "react";
import classNames from "classnames";
import styles from "./introOverlay.module.scss";

const IntroOverlay: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={classNames(styles.topItem, "introTop")} />
                <div className={classNames(styles.topItem, "introTop")} />
                <div className={classNames(styles.topItem, "introTop")} />
            </div>
            <div className={styles.bottom}>
                <div className={classNames(styles.bottomItem, "introBottom")} />
                <div className={classNames(styles.bottomItem, "introBottom")} />
                <div className={classNames(styles.bottomItem, "introBottom")} />
            </div>
        </div>
    );
};

export default IntroOverlay;
