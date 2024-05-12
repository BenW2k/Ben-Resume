import styles from "../styles/skillsPanel.module.scss";
import {useState} from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
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

const [isSubcategory, setIsSubcategory] = useState(false);
const test = "test";
const categories = {
  frontend: {
    name: "Frontend Development",
    image: "path/to/image1.jpg",
    subcategories: {
      "frontend-sub1": {
        name: "Skill 1",
        image: "path/to/image1.1.jpg",
      },
      "frontend-sub2": {
        name: "Skill 2",
        image: "path/to/image1.2.jpg",
      },
      "frontend-sub3": {
        name: "Skill 3",
        image: "path/to/image1.2.jpg",
      },
      "frontend-sub4": {
        name: "Skill 4",
        image: "path/to/image1.2.jpg",
      },
    },
  },
  backend: {
    name: "Backend Development",
    image: "path/to/image2.jpg",
    subcategories: {
      "backend-sub1": {
        name: "Skill 1",
        image: "path/to/image1.1.jpg",
      },
      "backend-sub2": {
        name: "Skill 2",
        image: "path/to/image1.2.jpg",
      },
      "frontend-sub3": {
        name: "Skill 3",
        image: "path/to/image1.2.jpg",
      },
      "backend-sub4": {
        name: "Skill 4",
        image: "path/to/image1.2.jpg",
      },
    },
  },
  "machine learning": {
    name: "Machine Learning",
    image: "path/to/image1.jpg",
    subcategories: {
      "ml-sub1": {
        name: "Skill 1",
        image: "path/to/image1.1.jpg",
      },
      "ml-sub2": {
        name: "Skill 2",
        image: "path/to/image1.2.jpg",
      },
      "ml-sub3": {
        name: "Skill 3",
        image: "path/to/image1.2.jpg",
      },
      "ml-sub4": {
        name: "Skill 4",
        image: "path/to/image1.2.jpg",
      },
    },
  },
  "data science": {
    name: "Data Science",
    image: "path/to/image2.jpg",
    subcategories: {
      "ds-sub1": {
        name: "Skill 1",
        image: "path/to/image1.1.jpg",
      },
      "ds-sub2": {
        name: "Skill 2",
        image: "path/to/image1.2.jpg",
      },
      "ds-sub3": {
        name: "Skill 3",
        image: "path/to/image1.2.jpg",
      },
      "ds-sub4": {
        name: "Skill 4",
        image: "path/to/image1.2.jpg",
      },
    },
  },
  "other skills": {
    name: "Other",
    image: "path/to/image1.jpg",
    subcategories: {
      "other-sub1": {
        name: "Skill 1",
        image: "path/to/image1.1.jpg",
      },
      "other-sub2": {
        name: "Skill 2",
        image: "path/to/image1.2.jpg",
      },
      "other-sub3": {
        name: "Skill 3",
        image: "path/to/image1.2.jpg",
      },
      "other-sub4": {
        name: "Skill 4",
        image: "path/to/image1.2.jpg",
      },
    },
  },
};
interface SkillProps {
  skillName: string;
  skillCategory: string;
  imageSource: any;
}

function CreateSkill(props: SkillProps) {
  const {skillName, skillCategory, imageSource} = props;
  return (
    <div className={styles["tablet-container"]}>
      <Image
        src={imageSource}
        alt="skill-icon"
        width={100}
        height={100}
        className={styles["skill-icon"]}
      />
      <p className={styles["skill-title"]}>{skillName}</p>
      {/* <p className={styles["skill-category"]}>{skillCategory}</p> */}
      {/* <button className={styles["see-more-button"]}>↘</button> */}
    </div>
  );
}
interface SkillTitleProps {
  name: string;
}

function SkillTitle({name}: SkillTitleProps) {
  return (
    <div>
      <Button className="back-button">←</Button>
      <h3 className="category title">{name}</h3>
    </div>
  );
}
export function SkillsPanel() {
  return (
    <div className={styles["skills-panel"]}>
      {isSubcategory ? (
        <SkillTitle name={test} />
      ) : (
        <CreateSkill
          skillName="Frontend Development"
          skillCategory="Frontend"
          imageSource={frontendLight}
        />
      )}
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
  );
}
