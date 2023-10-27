import { FC } from "react";

import { NavLink } from "react-router-dom";

import logo from "../../../assets/imgs/header/logo.png"
import avatar from "../../../assets/imgs/header/avatar.png"

import { navLinksHeader } from "../../../utils/const"

import styles from "./style.module.scss"

const Header:FC = () => {
    return (
            <div className={styles.heading}>
                <div className={styles.leftSide}>
                    <div className={styles.logo}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={styles.boxHello}>
                        <p className={styles.hello}>Welcome back, <span className={styles.name}> Nikita!</span></p>
                        <div className={styles.avatar}>
                            <img src={avatar} alt="user avatar" />
                        </div>
                    </div>
                </div>
                <ul className={styles.rightSide}>
                    {navLinksHeader.map((link) => {
                        return (
                            <li className={styles.link} key={link.name}>
                                <NavLink to={link.path}>
                                    {link.name}
                                </NavLink>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
    )
}
 
export default Header;