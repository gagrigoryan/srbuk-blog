import React, { useEffect } from "react";
import gsap from "gsap";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Cases from "../components/Cases/Cases";
import IntroOverlay from "../components/IntroOverlay/IntroOverlay";

const Home: React.FC = () => {
    const tl = gsap.timeline();
    useEffect(() => {
        const setVh = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty("--vh", `${vh}px`);
        };
        setVh();
        // window.addEventListener("resize", setVh);
        //
        // return () => window.removeEventListener("resize", setVh);

        tl.from(".BannerSpan", 1.8, {
            y: 100,
            ease: "power4.out",
            delay: 1,
            skewY: 7,
            stagger: {
                amount: 0.3,
            },
        })
            .to(".introTop", 1.5, {
                height: 0,
                ease: "expo.inOut",
                stagger: 0.4,
            })
            .to(".introBottom", 1.5, {
                width: 0,
                ease: "expo.inOut",
                delay: -0.8,
                stagger: {
                    amount: 0.4,
                },
            })
            .from(".caseImage", 1.6, {
                scale: 1.4,
                ease: "expo.inOut",
                delay: -2,
                stagger: {
                    amount: 0.4,
                },
            });
    }, []);

    return (
        <>
            <IntroOverlay />
            <Header />
            <Banner />
            <Cases />
        </>
    );
};

export default Home;
