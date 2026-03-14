import Image from "next/image";
import styles from "./WeddingDate.module.css";

import sign from "../../public/date/sign2.png";

export default function WeddingDate() {
  return (
    <div className={styles.dates}>
      <h3>
        dakujeme, ze budete súcastou <br /> nášho velkého dna
      </h3>
      <div className={styles.week}>
        <div className={styles.day}>
          <p className={styles.name}>Štvrtok</p>
          <p className={styles.num}>30</p>
        </div>
        <div className={styles.day}>
          <p className={styles.name}>Piatok</p>
          <p className={styles.num}>31</p>
        </div>
        <div className={styles.day} id={styles.special_day}>
          <p className={styles.name}>Sobota</p>
          <p className={styles.num}>1</p>
          <span className={styles.sign}>
            <Image src={sign} alt="sign" />
          </span>
        </div>
        <div className={styles.day}>
          <p className={styles.name}>Nedeľa</p>
          <p className={styles.num}>2</p>
        </div>
        <div className={styles.day}>
          <p className={styles.name}>Pátek</p>
          <p className={styles.num}>3</p>
        </div>
      </div>
    </div>
  );
}
