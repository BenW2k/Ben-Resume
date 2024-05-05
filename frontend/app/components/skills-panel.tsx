import styles from "../styles/skillsPanel.module.scss";
import Image from "next/image";

interface SkillProps {
  skillName: string;
  skillCategory: string;
  imageSource: any;
}
export default function CreateSkill(props: SkillProps) {
  const {skillName, skillCategory, imageSource} = props;
  return (
    <div className={styles["tablet-container"]}>
      <Image
        src={imageSource}
        alt="skill-icon"
        className={styles["skill-icon"]}
      />
      <p className={styles["skill-title"]}>{skillName}</p>
      <p className={styles["skill-category"]}>{skillCategory}</p>
    </div>
  );
}
