import styles from "./styles/home.module.css";
import Image from "next/image";
import Button from "react-bootstrap/Button";
// import CreateSkill from "./components/skills-panel";
import {Testimonial} from "./components/testimonial-panel";
import {SkillsPanel} from "./components/skills-panel";

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
      <div className="skills-panel">
        <SkillsPanel />
        {/* <div className={styles["skills-panel"]}>
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
  </div> */}
      </div>
      <div className={styles["testimonial-panel"]}>
        <Testimonial />
      </div>
      <div className={styles["current-work"]}>
        <div className={styles["current-title-section"]}>
          <h1 className={styles["current-title"]}>Currently working on:</h1>
        </div>
        <div className={styles["current-text-section"]}>
          {" "}
          Current focus: Full stack habit-tracking application using Java and
          Next.js
        </div>
        <div className={styles["current-text-section"]}>
          <Button className={styles["current-work-button"]}>See More! ↗</Button>
        </div>
      </div>
      <div className={styles["highlighted-projects-panel"]}></div>
    </div>
  );
}
