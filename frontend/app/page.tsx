import styles from "./styles/home.module.css";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import CreateSkill from "./components/skills-panel";
import darkModeLogo from "./assets/img/figma-logo-white.svg";
import frontendLight from "./assets/img/frontend-light.svg";
import frontendDark from "./assets/img/frontend-dark.svg";
import backendLight from "./assets/img/backend-light.svg";
import backendDark from "./assets/img/backend-dark.svg";
import machinelearningLight from "./assets/img/machine-learning-light.svg";
import machinelearningDark from "./assets/img/machine-learning-dark.svg";
import datascienceLight from "./assets/img/data-science-light.svg";
import datascienceDark from "./assets/img/data-science-dark.svg";
import otherLight from "./assets/img/other-light.png";
import otherDark from "./assets/img/other-dark.svg";

export default function Home() {
  return (
    <div className={styles["home-grid"]}>
      <h1 className={styles["home-title"]}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.{" "}
      </h1>
      <p className={styles["home-subtitle"]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque qui
        delectus iusto asperiores, sapiente alias fuga eum officia. Praesentium
        repudiandae non accusamus, explicabo cupiditate quis!
      </p>
      <div className={styles["skills-panel"]}>
        <CreateSkill
          skillName="Frontend Development"
          skillCategory="Frontend"
          imageSource={frontendLight}
        />
        <CreateSkill
          skillName="Backend Development"
          skillCategory="Backend"
          imageSource={backendLight}
        />
        <CreateSkill
          skillName="Machine Learning"
          skillCategory="Machine Learning"
          imageSource={machinelearningLight}
        />
        <CreateSkill
          skillName="Data Science"
          skillCategory="Data Science"
          imageSource={datascienceLight}
        />
        <CreateSkill
          skillName="Other Skills"
          skillCategory="Other"
          imageSource={otherLight}
        />
      </div>
      <div className={styles["wip-panel"]}>WIP</div>
      <div className={styles["current-work"]}>
        <div className={styles["current-section"]}>
          <h1 className={styles["current-title"]}>Currently working on:</h1>
        </div>
        <div className={styles["current-section"]}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque qui
          delectus iusto asperiores, sapiente alias fuga eum officia.
          Praesentium repudiandae non accusamus, explicabo cupiditate quis!{" "}
        </div>
        <div className={styles["current-section"]}>
          <Button className={styles["current-work-button"]}>See More! ↗</Button>
        </div>
      </div>
    </div>
  );
}
