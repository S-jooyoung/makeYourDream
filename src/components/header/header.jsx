import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/images/loginLogo.png" alt="logo" />
    </header>
  );
};

export default Header;
