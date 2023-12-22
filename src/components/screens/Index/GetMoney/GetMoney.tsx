import { FC } from "react";
import { Link } from "react-router-dom";

import { LiaLongArrowAltRightSolid } from 'react-icons/lia';

import styles from "./styles.module.scss"

const GetMoney:FC = () => {
    return (
        <div>
            <p className={styles.money}>You have USD 1.000 pending money, it will be ready in 2 business days</p>
            <Link className={styles.link} to='#'>
                <span className={styles.getMoney}>Get money now</span>
                <LiaLongArrowAltRightSolid className={styles.icon} size={20}/>
            </Link>
        </div>
    );
}
 
export default GetMoney;