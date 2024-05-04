import styles from "../styles/skillsPanel.module.scss";
import Image from "next/image";

export default function createTablet(
  name: string,
  category: string,
  imageSource: string
) {
  <div className="tablet-container">
    <Image
      src={imageSource}
      alt="skill-icon"
      className={styles["skill-icon"]}
    />
  </div>;
}
