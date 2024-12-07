import styles from "./OrderSummary.module.css"; 
import { Barlow } from "next/font/google";

const barlow = Barlow({
    subsets: ["latin"], 
    weight: "400"
})

export default function OrderSummary({answers, isModal}) {
    const isCapsule = answers.how === "Capsule"; 

    return (
        <p className={`${styles.summary} ${isModal ? styles.modal : styles["not-modal"]}`}>I drink my coffee <span>{answers.how === "Capsule" ? "using" : "as"}</span> <span className={styles.choice}>{`${answers.how ? answers.how : "_________"}${answers.how === "Capsule" ? "s" : ""}`}</span>,
        with a <span className={styles.choice}>{answers.type ? answers.type : "_________"}</span> type of bean. <span className={styles.choice}>{answers.much ? answers.much : "_________"}</span> {!isCapsule && <span className={styles["is-filter"]}><span>ground ala</span> <span className={styles.choice}>{answers.grind ? answers.grind : "____________"}</span></span>}, sent to me <span className={styles.choice}>{answers.often ? answers.often : "___________"}</span>
        </p>
    )
}