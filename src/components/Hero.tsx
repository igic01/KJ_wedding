import styles from "./Hero.module.css";
import Image from "next/image";
import card from "../../public/hero/card.png";
import envelop from "../../public/hero/envelop.png";
import flowers from "../../public/hero/group_flowers.png";
import flowersOnPaper from "../../public/hero/flowers_on_paper.png";
import frontEnvelop from "../../public/hero/front_envelop.png";
import photo from "../../public/hero/their_photo.png";

export default function Header() {
    return (
        <main className={styles.hero}>
            {/* Envelop */}

            <div className={styles.envelop}>
                <Image src={envelop} alt="envelop" className={styles.enve} />
                <Image
                    src={frontEnvelop}
                    alt="front part of envelop"
                    className={styles.enveFront}
                />
                <Image src={card} alt="card" className={styles.card} />
                <Image
                    src={photo}
                    alt="photo of Katka and Jaro"
                    className={styles.photo}
                />
                <Image
                    src={flowersOnPaper}
                    alt="two flowers on paper"
                    className={styles.flowersOnPaper}
                />
            </div>

            {/* Flowers */}
            <Image src={flowers} alt="flowers" className={styles.flowers} />
        </main>
    );
}