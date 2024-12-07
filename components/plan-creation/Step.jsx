"use client"
import styles from "./Step.module.css"
import Image from "next/image";

export default function Step({title, question, index, answers, paddingProperty}) {    
    const stepClickHandler = () => {
        const element = document.getElementById(question); 
        if (element && textStatus !== "disabled") {
            element.scrollIntoView({ behavior: "smooth"})
        }
    }

    let iconSrc = ""; 
    let textStatus = ""

    if (answers.how === "Capsule" && question === "grind") {
        iconSrc = "/assets/step-indicator/ban-solid.svg"
        textStatus = "disabled"
    } else if (answers[question]) {
        iconSrc = "/assets/step-indicator/check-solid.svg"
        textStatus = "complete"
    } else {
        iconSrc = "/assets/step-indicator/x-solid.svg"
        textStatus = "incomplete"
    }

    return (
        <div onClick={stepClickHandler} className={`${styles.flex} ${styles[paddingProperty]} ${styles[textStatus]}`}>
            <div>{index}</div>
            <div>{title}</div>
            <Image src={iconSrc} width="15" height="15" alt="Form status icon"/>
            <div className={textStatus === "disabled" ? styles.backdrop : styles.box}></div>
        </div>
    )
}