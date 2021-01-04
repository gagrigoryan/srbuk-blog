import React from "react";
import styles from "./cases.module.scss";

const caseStudies = [
    {
        id: 1,
        subtitle: "Curology",
        title: "A custom formula for your skin’s unique needs",
        img:
            "https://images.unsplash.com/photo-1609778890377-e800d0541d0c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
        id: 2,
        subtitle: "Yourspace",
        title: "Open space floor plans for you next venture",
        img:
            "https://images.unsplash.com/photo-1609701123856-2c51917f7f30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80",
    },
    {
        id: 3,
        subtitle: "Lumin",
        title: "For your best look ever",
        img:
            "https://images.unsplash.com/photo-1609687992571-1ef22058b676?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=389&q=80",
    },
];

const Cases: React.FC = () => {
    return (
        <section className={styles.container}>
            <div className={styles.cases}>
                {caseStudies.map((item) => (
                    <div className={styles.case} key={item.id}>
                        <div className={styles.caseDetails}>
                            <span>{item.subtitle}</span>
                            <h2>{item.title}</h2>
                        </div>
                        <div className={styles.caseImage}>
                            <img src={item.img} alt={item.title} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cases;
