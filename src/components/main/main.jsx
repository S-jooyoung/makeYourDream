import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Components
import Footer from "../footer/footer";
import Header from "../header/header";
import ScheduleMaker from "../schedulemaker/schedulemaker";
import styles from "./main.module.css";

const Main = ({ authservice, pptmaker }) => {
  const navigateState = useNavigate().state;
  const [userId, setUserId] = useState(navigateState && navigateState.id);

  const navigate = useNavigate();

  //로그아웃
  const onLogout = () => {
    authservice.logout();
  };

  //로그인 시 user.uid 저장 및 로그아웃 시 로그인화면 전횐
  useEffect(() => {
    authservice.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  }, [authservice, navigate]);

  return (
    <div className={styles.wrap}>
      <Header onLogout={onLogout} />
      <section className={styles.content}>
        <ScheduleMaker pptmaker={pptmaker} />
      </section>

      <Footer />
    </div>
  );
};

export default Main;
