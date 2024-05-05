import styles from "./styles/home.module.css";
import Image from "next/image";
import CreateSkill from "./components/skills-panel";
import darkModeLogo from "./assets/img/figma-logo-white.svg";
import frontendLight from "./assets/img/frontend-light.svg";
import frontendDark from "./assets/img/frontend-dark.svg";
import backendLight from "./assets/img/backend-light.svg";
import backendDark from "./assets/img/backend-dark.svg";
import machinelearningLight from "./assets/img/machine-learning-light.svg";
import machinelearningDark from "./assets/img/machine-learning-dark.svg";
import datascienceLight from "./assets/img/data.svg";
import datascienceDark from "./assets/img/backend-light.svg";
import otherLight from "./assets/img/frontend-light.svg";
import otherDark from "./assets/img/backend-light.svg";

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
      {/* <div className="panel-1"></div> */}
      <div className={styles["skills-panel"]}>
        <CreateSkill
          skillName="test"
          skillCategory="Frontend"
          imageSource={frontendLight}
        />
        <CreateSkill
          skillName="test2"
          skillCategory="Backend"
          imageSource={backendLight}
        />
        <CreateSkill
          skillName="test3"
          skillCategory="Machine Learning"
          imageSource={"./assets/img/machine-learning-dark.svg"}
        />
        <CreateSkill
          skillName="test4"
          skillCategory="Data Science"
          imageSource={backendLight}
        />
        <CreateSkill
          skillName="test5"
          skillCategory="Other"
          imageSource={backendLight}
        />
      </div>
    </div>
  );
}
