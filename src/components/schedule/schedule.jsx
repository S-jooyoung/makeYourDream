import React from "react";
import Button from "../button/button";
import styles from "./schedule.module.css";

const Schedule = ({ pptmaker, title, info }) => (
  <li className={styles.schedule}>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.info}>{info}</p>
    <Button name={"다운로드"} onClick={(_ev) => pptmaker.mandart()}></Button>
  </li>
);

export default Schedule;
