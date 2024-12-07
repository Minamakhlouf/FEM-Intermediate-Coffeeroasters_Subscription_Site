"use client"
import styles from "./Modal.module.css"
import { useState } from "react"
import OrderSummary from "../plan-creation/OrderSummary"
import { Fraunces, Barlow } from "next/font/google"
import { useRouter } from "next/navigation"

const fraunces = Fraunces({
    subsets: ["latin"],
    weight: "400"
})

const barlow = Barlow({
    subsets: ["latin"], 
    weight: "400"
})

export default function Modal({planCreated, disableModal, answers, resetAnswers}) {
    const [isCheckedOut, setIsCheckedOut] = useState(false)
    const router = useRouter(); 

    const disableModalHandler = () => {
        disableModal(false); 
        if (isCheckedOut) {
            setIsCheckedOut(false)
        }
    }

    const stopPropagationHandler = (e) => {
        e.stopPropagation(); 
    }

    const checkOutHandler = () => {
        resetAnswers((prevState) => ({...prevState, how: false, type: false, much: false, grind: false, often: false}))
        setIsCheckedOut(true); 
    }

    const checkoutConfirmedHandler = () => {
        router.push("/"); 
    }

    let monthlyPayment = 0; 

    if (answers.much === "250g") {
        if (answers.often === "Every week") {
            monthlyPayment = 7 * 4; 
        } else if (answers.often === "Every 2 weeks") {
            monthlyPayment = 9.6 * 2 
        } else {
            monthlyPayment = 12
        }
    } else if (answers.much === "500g") {
        if (answers.often === "Every week") {
            monthlyPayment = 13 * 4; 
        } else if (answers.often === "Every 2 weeks") {
            monthlyPayment = 17.5 * 2 
        } else {
            monthlyPayment = 22
        }
    } else {
        if (answers.often === "Every week") {
            monthlyPayment = 22 * 4; 
        } else if (answers.often === "Every 2 weeks") {
            monthlyPayment = 32 * 2 
        } else {
            monthlyPayment = 42
        }
    }

    const preCheckoutMessage = (<div>
        <OrderSummary answers={answers} isModal={true}/> 
        <p className={`${styles.text} ${barlow.className}`}>Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. </p>
        <div className={styles["btn-container"]}>
            <p className={styles.price}><span>Checkout -</span>{`$${monthlyPayment.toFixed(2)}/mo`}</p>
            <button className={fraunces.className} onClick={checkOutHandler}><span>Checkout</span></button>
        </div>
    </div>)

    const postCheckoutMessage = (<div className={styles.completed}>
        <p className={styles["success-message"]}>Your order has been successfully processed. You can look forward to receiving regular shipments of our delicious coffee brought right to your door to enjoy.</p>
        <p className={`${styles.text} ${barlow.className}`}>Since this website is for display purposes only, there will be no form to collect customers private information like names and credit cards. This is just simulating what would happen after the customer has successfully purchased the product.</p>
        <div>
            <button onClick={checkoutConfirmedHandler} className={fraunces.className}>I understand</button>
        </div>
    </div>)

    return (
        <section onClick={disableModalHandler} className={planCreated ? styles.backdrop : styles.disabled}>
            <div onClick={stopPropagationHandler} className={styles["message-container"]}>
                <h2>
                    {isCheckedOut ? "Order Completed" : "Order Summary"}
                </h2>
                <div className={styles.message}>
                    {isCheckedOut ? 
                        postCheckoutMessage:
                        preCheckoutMessage
                    }
                </div>
            </div>
        </section>
    )
}