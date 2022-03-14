import React from "react";
import styles from "./mandart_outer_box.module.css";

const MandartOuterBox = (props) => {
  return (
    <form className={styles.form}>
      <textarea
        name="message"
        className={`${styles.textarea} ${styles.outerarea}`}
        rows="2"
      ></textarea>
      <textarea name="message" className={styles.textarea} rows="2"></textarea>
      <textarea name="message" className={styles.textarea} rows="2"></textarea>
      <textarea name="message" className={styles.textarea} rows="2"></textarea>
      <textarea
        name="message"
        className={`${styles.textarea} ${styles.mainarea}`}
        rows="2"
      ></textarea>
      <textarea name="message" className={styles.textarea} rows="2"></textarea>
      <textarea name="message" className={styles.textarea} rows="2"></textarea>
      <textarea name="message" className={styles.textarea} rows="2"></textarea>
      <textarea name="message" className={styles.textarea} rows="2"></textarea>
    </form>
  );
};

export default MandartOuterBox;
