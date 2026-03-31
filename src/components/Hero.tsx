"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";
import anim from "./HeroAnimation.module.css";
import Image from "next/image";
import card from "../../public/hero/card.png";
import envelop from "../../public/hero/envelop.png";
import flowersOnPaper from "../../public/hero/flowers_on_paper.png";
import frontEnvelop from "../../public/hero/front_envelop.png";
import photo from "../../public/hero/their_photo.png";

export default function Header() {
    const [cardPhase, setCardPhase] = useState<"closed" | "openingMiddle" | "open" | "closingMiddle">("closed");
    const stageTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const stageMs = 260;

    const openCard = () => {
        if (cardPhase !== "closed") return;
        if (stageTimeoutRef.current) {
            clearTimeout(stageTimeoutRef.current);
            stageTimeoutRef.current = null;
        }
        setCardPhase("openingMiddle");
        stageTimeoutRef.current = setTimeout(() => {
            setCardPhase("open");
        }, stageMs);
    };

    const closeCard = () => {
        if (cardPhase === "closed") return;
        if (stageTimeoutRef.current) {
            clearTimeout(stageTimeoutRef.current);
            stageTimeoutRef.current = null;
        }
        setCardPhase("closingMiddle");
        stageTimeoutRef.current = setTimeout(() => {
            setCardPhase("closed");
        }, stageMs);
    };

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                if (stageTimeoutRef.current) {
                    clearTimeout(stageTimeoutRef.current);
                    stageTimeoutRef.current = null;
                }
                setCardPhase((prev) => {
                    if (prev === "closed") return prev;
                    stageTimeoutRef.current = setTimeout(() => {
                        setCardPhase("closed");
                    }, stageMs);
                    return "closingMiddle";
                });
            }
        };

        if (cardPhase !== "closed") {
            window.addEventListener("keydown", onKeyDown);
        }

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [cardPhase]);

    useEffect(() => {
        return () => {
            if (stageTimeoutRef.current) {
                clearTimeout(stageTimeoutRef.current);
            }
        };
    }, []);

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
                <Image
                    src={card}
                    alt="svadobna pozvanka"
                    className={`${styles.card} ${cardPhase === "openingMiddle" || cardPhase === "closingMiddle" ? anim.cardMiddle : ""} ${cardPhase === "open" ? anim.cardOpen : ""}`}
                    onClick={openCard}
                />
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
            {cardPhase !== "closed" ? (
                <button
                    type="button"
                    className={styles.backdrop}
                    onClick={closeCard}
                    aria-label="Zavriet pozvanku"
                />
            ) : null}
        </section>
    );
}
