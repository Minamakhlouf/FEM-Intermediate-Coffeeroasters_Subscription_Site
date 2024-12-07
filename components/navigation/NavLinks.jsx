"use client"; 
import { useState } from "react"; 
import styles from "./Navlinks.module.css"
import Link from "next/link";
import { Fraunces, Barlow } from "next/font/google"; 
import { usePathname } from "next/navigation";

const fraunces = Fraunces({
    subsets: ["latin"], 
    weight: "400"
})

const barlow = Barlow({
    subsets: ["latin"], 
    weight: "400"
})

export default function NavLinks() {
    const [isMobileShown, setIsMobileShown] = useState(false)

    const path = usePathname(); 

    const mobileLinkShownHandler = () => {
        setIsMobileShown(!isMobileShown); 
    }

    return (
        <div>
            <button
                onClick={mobileLinkShownHandler}
                className={styles["btn-container"]}
                aria-expanded={isMobileShown ? "true" : "false"}
                aria-label="Toggle navigation"
            >
                {
                    isMobileShown ? 
                    <svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M12.657.843a1.5 1.5 0 010 2.121L9.12 6.5l3.536 3.536a1.5 1.5 0 11-2.121 2.12L7 8.622l-3.536 3.536a1.5 1.5 0 11-2.12-2.121L4.877 6.5 1.343 2.964A1.5 1.5 0 113.464.844L7 4.377 10.536.843a1.5 1.5 0 012.12 0z" fill="#333D4B" fillRule="evenodd"/></svg>
                    : 
                    <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 12a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13zm0-6a1.5 1.5 0 010 3h-13a1.5 1.5 0 010-3h13z" fill="#333D4B" fillRule="evenodd"/></svg>
                }
            </button>
            <div className={`${styles.modal} ${isMobileShown ? styles.isShown : ""}`}>
                <ul className={`${styles["mobile-links"]} ${fraunces.className}`}>
                    <Link className={styles.link} href="/">Home</Link>
                    <Link className={styles.link} href="/about">About Us</Link>
                    <Link className={styles.link} href="/plan">Create Your Plan</Link>
                </ul>
            </div>
            <ul className={`${styles["normal-links"]} ${barlow.className}`}>
                <Link className={`${styles.link} ${path === "/" ? styles.active : ""}`} href="/">Home</Link>
                <Link className={`${styles.link} ${path === "/about" ? styles.active : ""}`} href="/about">About Us</Link>
                <Link className={`${styles.link} ${path === "/plan" ? styles.active : ""}`} href="/plan">Create Your Plan</Link>
            </ul>
        </div>
    )
}