//Basic
import React from "react";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUnlock } from "@fortawesome/free-solid-svg-icons";

//React-router
import { Link } from "react-router-dom";

//Component
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./login.module.css";

const Login = ({ authservice }) => {
  //SNS 로그인
  const snsLogin = (event) => {
    console.log(event.target.textContent);
    authservice //
      .snsLogin(event.target.textContent);
  };

  return (
    <section className={styles.wrap}>
      <Header />
      <section className={styles.login}>
        <h1 className={styles.snstitle}>SNS 연결</h1>
        <ul className={styles.snslist}>
          <li className={styles.snsitem}>
            <button className={styles.button} onClick={snsLogin}>
              <img
                className={styles.google}
                src="/images/Google.png"
                alt="GoogleLogo"
              />
              GOOGLE
            </button>
          </li>
          <li className={styles.snsitem}>
            <button className={styles.button} onClick={snsLogin}>
              <FontAwesomeIcon className={styles.github} icon={faGithub} />
              GITHUB
            </button>
          </li>
        </ul>
        <ul className={styles.emaillist}>
          <h1 className={styles.emailtitle}> 로그인 하기</h1>
          <li className={styles.emailitem}>
            <FontAwesomeIcon className={styles.inputicon} icon={faEnvelope} />
            <input
              className={styles.emailinput}
              type="email"
              placeholder="이메일을 입력하세요"
            />
          </li>
          <li className={styles.emailitem}>
            <FontAwesomeIcon className={styles.inputicon} icon={faUnlock} />
            <input
              className={styles.emailinput}
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </li>
          <li className={styles.emailbuttonwrap}>
            <button className={styles.emailbutton}>로그인 하기</button>
          </li>
        </ul>
        <nav className={styles.nav}>
          <Link className={styles.linkfind} to="">
            계정찾기
          </Link>
          <Link className={styles.linklogin} to="join">
            계정생성
          </Link>
        </nav>
      </section>
    </section>
  );
};

export default Login;
