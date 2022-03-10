import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./main.module.css";

const Main = ({ authservice }) => {
  const navigateState = useNavigate().state;
  const [userId, setUserId] = useState(navigateState && navigateState.id);

  const navigate = useNavigate();

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
    <section>
      <Header onLogout={onLogout} />
      <Footer />
    </section>
  );
};

export default Main;
