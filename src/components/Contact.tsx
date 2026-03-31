import Image from "next/image";
import styles from "./Contact.module.css";

import background from "../../public/contact/background.png";
import heart from "../../public/contact/heart.png";
import Envelop from "./Envelop";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>Nechajte nám spomienku</h2>
      <p>
        Budeme šťastní, ak nám zanecháte pár slov,
        <br /> ktoré si prečítame po našom veľkom dni
      </p>
      <div className={styles.envelop_container}>
        <div className={styles.pattern}>
          <div>
            <span>A teraz uz len spoločný život</span>
            <span>A teraz uz len spoločný život</span>
            <span>A teraz uz len spoločný život</span>
          </div>
          <div>
            <span>A teraz uz len spoločný život</span>
            <span>A teraz uz len spoločný život</span>
            <span>A teraz uz len spoločný život</span>
          </div>
          <div>
            <span>A teraz uz len spoločný život</span>
            <span>A teraz uz len spoločný život</span>
            <span>A teraz uz len spoločný život</span>
          </div>
        </div>
        <Envelop />
      </div>
    </div>
  );
}
