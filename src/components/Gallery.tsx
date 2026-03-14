import Image from "next/image";
import photo from "../../public/hero/photo_straight.png";
import arrow2 from "../../public/arrows/arrow2.svg";
import arrow3 from "../../public/arrows/arrow3.svg";
import arrow4 from "../../public/arrows/arrow4.svg";
import arrow5 from "../../public/arrows/arrow5.svg";
import styles from "./Gallery.module.css";

export default function Gallery() {
  return (
    <div className={styles.photoSection}>
      <h2>Náš príbeh</h2>
      <div className={styles.photos}>
        <div className={styles.photo_container}>
          <Image
            src={photo}
            className={styles.photo}
            alt="photo of Katka and Jaro"
          />
        </div>
        <div className={styles.photo_container}>
          <Image
            src={photo}
            className={styles.photo}
            alt="photo of Katka and Jaro"
          />
          <div className={`${styles.arrow} ${styles.arrow2}`}>
            <p>mali komentari</p>
            <Image src={arrow2} alt="arrow" />
          </div>
        </div>
        <div className={styles.photo_container}>
          <Image
            src={photo}
            className={styles.photo}
            alt="photo of Katka and Jaro"
          />
          <div className={`${styles.arrow} ${styles.arrow3}`}>
            <p>mali komentari</p>
            <Image src={arrow3} alt="arrow" />
          </div>
        </div>
        <div className={styles.photo_container}>
          <Image
            src={photo}
            className={styles.photo}
            alt="photo of Katka and Jaro"
          />
          <div className={`${styles.arrow} ${styles.arrow4}`}>
            <p>mali komentari</p>
            <Image src={arrow4} alt="arrow" />
          </div>
        </div>
        <div className={styles.photo_container}>
          <Image
            src={photo}
            className={styles.photo}
            alt="photo of Katka and Jaro"
          />
          <div className={`${styles.arrow} ${styles.arrow5}`}>
            <p>mali komentari</p>
            <Image src={arrow5} alt="arrow" />
          </div>
        </div>
        <div className={styles.photo_container}>
          <Image
            src={photo}
            className={styles.photo}
            alt="photo of Katka and Jaro"
          />
        </div>{" "}
        <div className={styles.photo_container}>
          <Image
            src={photo}
            className={styles.photo}
            alt="photo of Katka and Jaro"
          />
        </div>
      </div>
    </div>
  );
}
