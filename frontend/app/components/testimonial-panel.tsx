import Image from "next/image";
import styles from "../styles/testimonial.module.css";
import stock_img from "../assets/img/data-science-light.svg";

export const Testimonial = () => {
  return (
    <div className={styles.container}>
      <Image
        src={stock_img}
        alt="dark-mode-logo"
        className={styles["test-image"]}
      />
      <p className={styles["paragraph-1"]}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <p className={styles["paragraph-2"]}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
        corporis laboriosam magnam quibusdam pariatur
      </p>
      <p className={styles["current-element"]}>2/4</p>
    </div>
  );
};
