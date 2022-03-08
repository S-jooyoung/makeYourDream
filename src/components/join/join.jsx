import React, { useRef } from "react";
import Header from "../header/header";
import styles from "./join.module.css";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faUnlock } from "@fortawesome/free-solid-svg-icons";

const Join = ({ authservice }) => {
  //참조
  const emailRef = useRef();
  const passwordRef = useRef();

  //SNS 로그인
  const snsLogin = (event) => {
    authservice //
      .snsLogin(event.target.textContent);
  };

  //회원정보 제출
  const onSubmit = () => {
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
    authservice //
      .createUser(emailRef.current.value, passwordRef.current.value);
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
          <h1 className={styles.emailtitle}> 회원가입</h1>
          <li className={styles.emailitem}>
            <FontAwesomeIcon className={styles.inputicon} icon={faEnvelope} />
            <input
              ref={emailRef}
              className={styles.emailinput}
              type="email"
              placeholder="이메일을 입력하세요"
            />
          </li>
          <li className={styles.emailitem}>
            <FontAwesomeIcon className={styles.inputicon} icon={faUnlock} />
            <input
              ref={passwordRef}
              className={styles.emailinput}
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </li>
          <li className={styles.emailbuttonwrap}>
            <button className={styles.emailbutton} onClick={onSubmit}>
              등록하기
            </button>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Join;
