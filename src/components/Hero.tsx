"use client";

import styles from "./Hero.module.css";
import anim from "./HeroAnimation.module.css";
import Image from "next/image";
import card from "../../public/hero/card.png";
import envelop from "../../public/hero/envelop.png";
import flowersOnPaper from "../../public/hero/flowers_on_paper.png";
import frontEnvelop from "../../public/hero/front_envelop.png";
import photo from "../../public/hero/their_photo.png";

export default function Header() {
    return (
        <section className={styles.hero}>
            <span className={`${styles.scriptName} ${styles.katka} ${anim.scriptNameBase} ${anim.scriptNameAnimate}`}>
                Katka
            </span>
            <span className={`${styles.scriptName} ${styles.jaro} ${anim.scriptNameBase} ${anim.scriptNameAnimate} ${anim.jaroDelay}`}>
                Jaro
            </span>

            {/* Envelop */}

            <div className={`${styles.envelop} ${anim.envelopStart} ${anim.envelopLanding}`}>
                <Image src={envelop} alt="envelop" className={styles.enve} />
                <Image
                    src={frontEnvelop}
                    alt="front part of envelop"
                    className={styles.enveFront}
                />
                <Image src={card} alt="svadobna pozvanka" className={styles.card} />
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
        </section>
    );
}
