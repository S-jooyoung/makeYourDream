import React from "react";

import styles from "./schedule.module.css";

const Schedule = ({ title, info }) => (
  <>
    <h1 className={styles.title}>{title}</h1>
    <p className={styles.info}>{info}</p>
  </>
);

export default Schedule;
