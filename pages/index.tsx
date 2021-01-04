import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Cases from "../components/Cases/Cases";

const Home: React.FC = () => {
    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };
        setVh();
        // window.addEventListener("resize", setVh);
        //
        // return () => window.removeEventListener("resize", setVh);
    }, []);

    return (
        <>
            <Header />
            <Banner />
            <Cases />
        </>
    );
};

export default Home;
