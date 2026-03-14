import Image from "next/image";
import styles from "./Contact.module.css";

import background from "../../public/contact/background.png";
import heart from "../../public/contact/heart.png";
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
        <div className={styles.envelop}>
          <Image src={background} alt="pink card" />
          <form action="" method="post" className={styles.form}>
            <textarea
              name=""
              id=""
              maxLength={200}
              placeholder="Type what you want..."
            ></textarea>
            <div className={styles.info}>
              <div className={styles.stamp}>
                <Image src={heart} alt="heart" />
              </div>

              <div className={styles.labels}>
                <label htmlFor="">
                  PRE:
                  <input type="text" value="Katka a Jarko" readOnly />
                </label>
                <label htmlFor="">
                  OD:
                  <input type="text" />
                </label>
              </div>

              <input type="submit" value="ODOŠLI" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
