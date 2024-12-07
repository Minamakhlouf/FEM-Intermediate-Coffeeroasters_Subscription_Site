"use client"
import styles from "./SubmitOrder.module.css"; 
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["400", "700"]
})

export default function SubmitOrder({answers, createPlan}) {
    const onSubmitHandler = () => {
        window.scrollTo(0, 0)
        createPlan(true)
    }

    let orderFilled = false; 
    const isCapsule = answers.how === "Capsule"

    if (isCapsule) {
        if (answers.how && answers.type && answers.much && answers.often) {
            orderFilled = true; 
        }
    } else {
        if (answers.how && answers.type && answers.much && answers.often && answers.grind) {
            orderFilled = true; 
        }
    }

    return (
        <section className={styles.submit}>
            <div className={styles["btn-container"]}>
                <button className={`${styles.btn} ${!orderFilled ? styles.inactive : ""} ${fraunces.className}`} onClick={onSubmitHandler}>Create my plan!</button>
                <div className={`${!orderFilled ? styles.backdrop : ""}`}></div>
            </div>
        </section>
    )
}