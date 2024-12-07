"use client"
import { useState, useEffect } from "react"
import { questions } from "@/data/questions"
import Question from "./Question"
import OrderSummary from "./OrderSummary"
import SubmitOrder from "./SubmitOrder"
import StepIndicator from "./StepIndicator"
import styles from "./PlanContainer.module.css"
import { Barlow } from "next/font/google";
import Modal from "../modal/Modal"

const barlow = Barlow({
    subsets: ["latin"], 
    weight: "400"
})

export default function PlanContainer() {
    const [answers, setAnswers] = useState({
        how: false, 
        type: false, 
        much: false, 
        grind: false, 
        often: false
    })
    const [createPlan, setCreatePlan] = useState(false); 

    useEffect(() => {
        if (answers.how === "Capsule") {
            setAnswers((prevState) => {
                return {...prevState, grind: false}
            })
        }
    }, [answers.how])

    return (
        <>
            <section className={styles.plan}>
                <div>
                    <StepIndicator answers={answers}/>
                </div>
                <div>
                    <div className={styles["questions-container"]}>
                        {questions.map(question => {
                            return <Question currentState={answers} updateState={setAnswers} key={question.question} category={question.category} question={question.question} answers={question.answers}/>
                        })}
                    </div>
                    <div className={styles["summary-container"]}>
                        <h2 className={`${barlow.className}`}>Order Summary</h2>
                        <OrderSummary answers={answers} isModal={false}/>
                    </div>
                    <SubmitOrder answers={answers} createPlan={setCreatePlan}/> 
                </div>
            </section>
            <Modal planCreated={createPlan} disableModal={setCreatePlan} answers={answers} resetAnswers={setAnswers}/>
        </>
    )
}