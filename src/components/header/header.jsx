import React from "react";
import Button from "../button/button";
import styles from "./header.module.css";

const Header = ({ onLogout }) => {
  return (
    <header className={styles.header}>
      {onLogout && (
        <div className={styles.logoutBtn}>
          <Button name="로그아웃" onClick={onLogout} />
        </div>
      )}
      <img className={styles.logo} src="/images/loginLogo.png" alt="logo" />
    </header>
  );
};

export default Header;
