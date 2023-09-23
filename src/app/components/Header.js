import styles from "@/app/styles/navbar.module.css"
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";

const Header = () => {
    return (
        <>
            <header className={styles.main_header}>
                <div className={styles.navbar_brand}>
                    <Link href="/">
                        <h2 className={styles.logo}>Movie Flix</h2>
                    </Link>
                </div>
                <Nav />
            </header>
        </>
    );
};

export default Header;