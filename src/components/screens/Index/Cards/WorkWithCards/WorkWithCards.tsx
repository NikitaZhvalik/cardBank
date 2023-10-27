import { FC } from "react";

import Button from "../../../../ui/Button/Buttom";

import styles from './styles.module.scss'

const WorkWithCards:FC = () => {
    return (
        <div className={styles.container}>
            <Button className={styles.cards} children={'Cards'}/>
            <Button className={styles.showAll} children={'Show All'}/>
        </div>
    );
}
 
export default WorkWithCards;