import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Footer.module.css";
import { ROUTES } from "../../utils/routes";

import Logo from "../../images/logo.svg"

const Footer = () => {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={Logo} alt={"Stuff"} />
                </Link>
            </div>

            <div className={styles.rights}>
                Developed by
                <a
                    href="https://github.com/olya55515"
                    target="_blank"
                    rel="noreferrer"
                >
                    Shpak
                </a>
            </div>
            <div className={styles.socials}>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
                    </svg>
                </a>
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
                    </svg>
                </a>
                <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube.com`} />
                    </svg>
                </a>
            </div>
        </section>
    )
};

export default Footer;