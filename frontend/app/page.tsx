import styles from "./styles/home.module.css";
import Image from "next/image";

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
      <div className="panel-1"></div>
      <div className="skills-panel"></div>
    </div>
  );
}
