"use client"
import styles from "./Answer.module.css"; 

export default function Answer({category, title, description, currentState, updateState}) {
    const answerSubmittedHandler = () => {
        updateState((prevState) => {
            return { ...prevState, [category]: title}
        })
    }

    const isSelected = title === currentState[category]

    return (
        <div className={`${styles.answer} ${isSelected ? styles.selected : ""}`} onClick={answerSubmittedHandler}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}