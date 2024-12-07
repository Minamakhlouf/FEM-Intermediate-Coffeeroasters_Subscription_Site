import styles from "./HowItWorks.module.css"
import { Barlow } from "next/font/google"

const barlow = Barlow({
    subsets: ["latin"], 
    weight: "400"
})

export default function HowItWorks({isHome}) {
    return (
        <div className={`${styles["flex-container"]} ${isHome ? "" : styles.dark}`}>
            <div className={styles["flex-item"]}>
                <h2 className={isHome ? styles.light : styles.dark}><span>01</span> Pick your Coffee</h2>
                <p className={`${isHome ? styles.light : styles.dark} ${barlow.className}`}>Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
                <div className={`${styles.circle} ${isHome ? "" : styles.dark}`}></div>
                <div className={`${styles.line} ${isHome ? "" : styles.dark}`}></div>
            </div>
            <div className={styles["flex-item"]}>
                <h2 className={isHome ? styles.light : styles.dark}><span>02</span> Choose the frequency</h2>
                <p className={`${isHome ? styles.light : styles.dark} ${barlow.className}`}>Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
                <div className={`${styles.circle} ${isHome ? "" : styles.dark}`}></div>
                <div className={`${styles.line} ${isHome ? "" : styles.dark}`}></div>
            </div>
            <div className={styles["flex-item"]}>
                <h2 className={isHome ? styles.light : styles.dark}><span>03</span> Receive and enjoy!</h2>
                <p className={`${isHome ? styles.light : styles.dark} ${barlow.className}`}>We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.</p>
                <div className={`${styles.circle} ${isHome ? "" : styles.dark}`}></div>
            </div>
        </div>
    )
}