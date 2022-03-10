import React from "react";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <button className={styles.logout} onClick={onLogout}>
          로그아웃
        </button>
      )}
      <img className={styles.logo} src="/images/loginLogo.png" alt="logo" />
    </header>
  );
};

export default Header;
