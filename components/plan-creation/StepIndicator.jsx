import Step from "./Step"
import styles from "./StepIndicator.module.css"

export default function StepIndicator({answers}) {
    const steps = [
        {
            title: "Preferences", 
            question: "how", 
            paddingProperty: "padding-bottom"
        },
        {
            title: "Bean Type", 
            question: "type", 
            paddingProperty: "padding-both"
        },
        {
            title: "Quantity", 
            question: "much", 
            paddingProperty: "padding-both"
        },
        {
            title: "Grind Option", 
            question: "grind", 
            paddingProperty: "padding-both"
        },
        {
            title: "Deliveries", 
            question: "often", 
            paddingProperty: "padding-top"
        }
    ]

    return (
        <div className={styles["step-indicator"]}>
            {steps.map((step, index) => {
                return <Step key={`0${index}`} paddingProperty={step.paddingProperty} title={step.title} question={step.question} index={`0${index + 1}`} answers={answers}/>
            })}
        </div>
    )
}