import React from "react";
import styles from "./banner.module.css";

const Banner = ({ title, description }) => {
  return (
    <div className={styles.banner}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </div>
  );
};

export default Banner;
