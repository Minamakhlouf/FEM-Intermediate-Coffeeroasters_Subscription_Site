"use client"
import styles from "./Question.module.css"; 
import { useState, useEffect } from "react";
import Answer from "./Answer";

export default function Question({question, answers, category, currentState, updateState}) {
    const [isShown, setIsShown] = useState(false)

    const questionShownHandler = () => {
        setIsShown(!isShown); 
    }

    useEffect(() => {
        if (category === "grind" && currentState.how === "Capsule") {
          setIsShown(false);
        }
      }, [category, currentState]);

    return (
        <div id={category} className={styles["question-container"]}>
            <div onClick={questionShownHandler} className={`${styles["question-flex"]} ${category === "grind" && currentState.how === "Capsule" ? styles["is-disabled"] : ""}`}>
                <h2>{question}</h2>
                <button className={isShown ? styles.shown : ""}><svg width="19" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M15.949.586l2.828 2.828-9.096 9.096L.586 3.414 3.414.586l6.267 6.267z" fill="#0E8784" fillRule="nonzero"/></svg></button>
            </div>
            <div className={`${styles["answers-flex"]} ${isShown ? styles.shown : ""}`}>
                {answers.map(answer => {
                    return <Answer key={answer.title} currentState={currentState} updateState={updateState} category={category} title={answer.title} description={answer.description}/>
                })}
            </div>
            <div className={`${category === "grind" && currentState.how === "Capsule" ? styles.disabled : styles.nothing}`}></div>
        </div>
    )
}