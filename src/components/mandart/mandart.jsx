import React from "react";
import MandartBox from "../mandart_box/mandart_box";

import styles from "./mandart.module.css";

const Mandart = (props) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>2022년 스크루지 만다르트</h1>
      <div className={styles.col}>
        <MandartBox />
        <MandartBox />
        <MandartBox />
      </div>
      <div className={styles.col}>
        <MandartBox />
        <MandartBox />
        <MandartBox />
      </div>
      <div className={styles.col}>
        <MandartBox />
        <MandartBox />
        <MandartBox />
      </div>
    </section>
  );
};

export default Mandart;
