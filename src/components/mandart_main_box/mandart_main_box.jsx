import React from "react";
import styles from "./mandart_main_box.module.css";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const MandartMainBox = (props) => {
  return (
    <form className={styles.form}>
      <textarea
        name="message"
        className={`${styles.textarea} ${styles.outerarea}`}
        rows="2"
      />
      <textarea
        name="message"
        className={`${styles.textarea} ${styles.outerarea}`}
        rows="2"
      />
      <textarea
        name="message"
        className={`${styles.textarea} ${styles.outerarea}`}
        rows="2"
      />
      <textarea
        name="message"
        className={`${styles.textarea} ${styles.outerarea}`}
        rows="2"
      />
      <textarea
        name="message"
        className={`${styles.textarea} ${styles.mainarea}`}
        rows="2"
      />
      <textarea
        name="message"
        className={`${styles.textarea} ${styles.outerarea}`}
        rows="2"
      />
      <textarea
        name="message"
        className={`${styles.textarea} ${styles.outerarea}`}
        rows="2"
      />
      <textarea
        name="message"
        className={`${styles.textarea} ${styles.outerarea}`}
        rows="2"
      ></textarea>
      <textarea
        name="message"
        className={`${styles.textarea} ${styles.outerarea}`}
        rows="2"
      ></textarea>
    </form>
  );
};

export default MandartMainBox;
