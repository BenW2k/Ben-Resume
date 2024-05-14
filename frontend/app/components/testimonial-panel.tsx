import Image from "next/image";
import styles from "../styles/testimonial/testimonial.module.css";
import stock_img from "../assets/img/data-science-light.svg";

export const Testimonial = () => {
  return (
    <div className={styles.container}>
      <Image
        src={stock_img}
        alt="dark-mode-logo"
        className={styles["test-image"]}
      />
      <p className={styles["paragraph-1"]}>John Doe, John Doe & Co.</p>
      <p className={styles["paragraph-2"]}>
        "Dummy testimonial to gauge how long the text needs to be, maybe 2
        sentences or a single extended sentence?"
      </p>
      <p className={styles["current-element"]}>2/4</p>
    </div>
  );
};
