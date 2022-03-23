import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../banner/banner";
import Button from "../button/button";

import Footer from "../footer/footer";
import Header from "../header/header";
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
  });

  return (
    <div className={styles.wrap}>
      <Header onLogout={onLogout} />
      <section className={styles.content}>
        <Banner
          title={"계획 만들기"}
          description={
            "다양한 신년계획을 제공하는 무료 신년계획만들기 메이크드림(MakeDream}입니다. 하단에 있는 원하시는 계획표를 선택 해 주세요."
          }
        />
        <Button name={"데모"} onClick={(_ev) => pptmaker.mandart()}></Button>
      </section>
      <Footer />
    </div>
  );
};

export default Main;
