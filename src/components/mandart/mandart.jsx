import React from "react";
import MandartMainBox from "../mandart_main_box/mandart_main_box";
import MandartOuterBox from "../mandart_outer_box/mandart_outer_box";

import styles from "./mandart.module.css";

const Mandart = (props) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>2022년 스크루지 만다르트</h1>
      <div className={styles.col}>
        <MandartOuterBox />
        <MandartOuterBox />
        <MandartOuterBox />
      </div>
      <div className={styles.col}>
        <MandartOuterBox />
        <MandartMainBox />
        <MandartOuterBox />
      </div>
      <div className={styles.col}>
        <MandartOuterBox />
        <MandartOuterBox />
        <MandartOuterBox />
      </div>
    </section>
  );
};

export default Mandart;
