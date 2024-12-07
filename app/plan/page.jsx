import Image from "next/image"; 
import styles from "./page.module.css"; 
import { Barlow } from "next/font/google";
import HowItWorks from "@/components/HowItWorks";
import PlanContainer from "@/components/plan-creation/PlanContainer";

const barlow = Barlow({
    subsets: ["latin"], 
    weight: "400"
})

export default function Plan() {
    return (
        <main>
            <section className={styles.hero}>
            <picture>
                    <source
                        srcSet="/assets/plan/desktop/image-hero-blackcup.jpg"
                        media="(min-width: 1110px)"
                    />
                    <source
                        srcSet="/assets/plan/tablet/image-hero-blackcup.jpg"
                        media="(min-width: 768px)"
                    />
                    <Image
                        className={styles["hero-background"]}
                        src="/assets/plan/mobile/image-hero-blackcup.jpg"
                        alt="Hero Background Image"
                        fill
                    />
                </picture>
                <div className={styles.text}>
                    <h1>Create a plan</h1>
                    <p className={barlow.className}>Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.</p>
                </div>
                <div className={styles.backdrop}></div>
            </section>
            <section className={styles["how-it-works"]}>
                <HowItWorks isHome={false} />
            </section>
            <section className={styles["create-plan"]}>
                <PlanContainer/>
            </section>
        </main>
    )
}