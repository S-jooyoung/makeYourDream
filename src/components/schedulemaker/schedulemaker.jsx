import React from "react";
import Banner from "../banner/banner";
import Schedule from "../schedule/schedule";
import styles from "./schedulemaker.module.css";

const ScheduleMaker = ({ pptmaker }) => {
  return (
    <section className={styles.content}>
      <Banner
        title={"계획 만들기"}
        description={
          "다양한 신년 계획을 제공하는 무료 계획 만들기 MakeDream입니다. 하단에 있는 원하시는 계획표를 선택해 주세요."
        }
      />
      <ul className={styles.schedules}>
        <Schedule
          pptmaker={pptmaker}
          title={"만다르트 계획표"}
          info={
            "8가지의 큰 키워드를 잡고, 다시 그 키워드를 실천해가기 위한 8가지의 행동계획을 작성하는 것입니다."
          }
        />
        <Schedule
          pptmaker={pptmaker}
          title={"월간 계획표"}
          info={
            "월 단위로 해야 할 일과 목표를 설정해두고 행동 계획을 작성하는 것입니다."
          }
        />
        <Schedule
          pptmaker={pptmaker}
          title={"주간 계획표"}
          info={
            "주 단위로 해야 할 일과 목표를 설정해두고 행동 계획을 작성하는 것입니다."
          }
        />
        <Schedule
          pptmaker={pptmaker}
          title={"일일 계획표"}
          info={
            "하루를 시작하기 전 오늘 해야 할 일에 대한 행동 계획을 작성하는 것입니다."
          }
        />
      </ul>
    </section>
  );
};

export default ScheduleMaker;
