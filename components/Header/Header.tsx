"use client";

import Logo from "../UI/Logo/Logo";
import Link from "next/link";
import Button from "../UI/Button/Button";
import burgerImg from "/public/imgHeader/burgerImg.svg";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./Header.module.scss";
import { useState } from "react";

const Header = () => {
    const [burgerMenu, setMenu] = useState(false);
    const openBurgerMenu = () => setMenu(!burgerMenu);
    return (
        <header>
            <div className={styles.header}>
                <Link href="/">
                    <Logo></Logo>
                </Link>
                
                <nav className={styles.mainNav}>
                    <ul className={styles.mainNav__list}>
                        <li className={styles.mainNav__item}>
                            <Link href="#about-us" scroll={true} className={styles.mainNav__link}>About us</Link>
                        </li>
                        <li className={styles.mainNav__item}>
                            <Link href="#home-catalogy" scroll={true} className={styles.mainNav__link}>Catalogy</Link>
                        </li>
                        <li className={styles.mainNav__item}>
                            <Link href="#feedback" scroll={true} className={styles.mainNav__link}>Feedback</Link>
                        </li>
                        <li className={styles.mainNav__item}>
                            <Link href="#specials-conditions" scroll={true} className={styles.mainNav__link}>For Partrens</Link>
                        </li>
                        <li className={styles.mainNav__item}>
                            <Link href="#order-call" scroll={true} className={styles.mainNav__link}>Contacts</Link>
                        </li>
                    </ul>
                </nav>
                <Button
                    className={styles.burgerMenu}
                    burgerImg={burgerImg}
                    alt="burger menu"
                    onClick={openBurgerMenu}
                    type="button"
                />
            </div>
                <MobileMenu burgerMenu={burgerMenu} openBurgerMenu={openBurgerMenu}></MobileMenu>
        </header>
    )
}
export default Header;