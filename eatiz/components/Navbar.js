import React, { useState } from "react"
import styles from "../styles/Navbar.module.css"
import Link from "next/link"
import Image from 'next/image'

export default function Navbar() {
    const [menu, setMenu] = useState(true)
    const [responsiveNav, setResponsiveNav] = useState(false)
    const handleMenu = () => {
        setMenu(!menu)
        setResponsiveNav(!responsiveNav)
    }
    return (
        <div>
            <div className={styles.topNav}>
                <Link href="#" className={styles.menuIcon}>
                        <div onClick={handleMenu} className={menu ? styles.menuContainer : styles.change}>
                            <div className={styles.bar1}></div>
                            <div className={styles.bar2}></div>
                            <div className={styles.bar3}></div>
                        </div>
                </Link>
                <Link href="#" className={styles.link}>
                     <Image src="/logo.png" alt="Vercel Logo" width={105} height={31} />
                </Link>
                <Link href="#" className={styles.link}>Home</Link>
                <Link href="#" className={styles.link}>Contact</Link>
                <Link href="#" className={styles.link}>Services</Link>
                <Link href="#" className={styles.link}>About Us</Link>
            </div>
            <div className={responsiveNav ? styles.overlayDisplay : styles.overlay}>
                <span onClick={handleMenu} className={styles.closeBtn}>X</span>
                <div className={styles.overlayContent}>
                    <Link href="#" className={styles.reslink}>Home</Link>
                    <Link href="#" className={styles.reslink}>Contact</Link>
                    <Link href="#" className={styles.reslink}>Services</Link>
                    <Link href="#" className={styles.reslink}>About Us</Link>
                </div>
            </div>
            
        </div>
    )
}
