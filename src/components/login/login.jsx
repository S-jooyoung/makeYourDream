import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";

import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authservice }) => {
  const onLogin = (event) => {
    console.log(event.target.textContent);
    authservice //
      .login(event.target.textContent);
  };

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h1 className={styles.title}>SNS 연결</h1>
        <ul className={styles.snslist}>
          <li className={styles.snsitem}>
            <button className={styles.button} onClick={onLogin}>
              <img
                className={styles.google}
                src="/images/Google.png"
                alt="GoogleLogo"
              />
              GOOGLE
            </button>
          </li>
          <li className={styles.snsitem}>
            <button className={styles.button} onClick={onLogin}>
              <FontAwesomeIcon className={styles.github} icon={faGithub} />
              GITHUB
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};

export default Login;
