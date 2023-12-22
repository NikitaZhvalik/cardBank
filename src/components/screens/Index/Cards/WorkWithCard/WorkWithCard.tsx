import { FC } from "react";
import { AiOutlinePlus, AiOutlineLine } from "react-icons/ai";

import Button from "../../../../ui/Button/Button";

import styles from "./styles.module.scss"

const WorkWithCard:FC = () => {
    return (
        <div className={styles.buttons}>
            <Button className={styles.buttonAdd}>
                Add Card
                <AiOutlinePlus className={styles.icon} size={15} />
            </Button>
            <Button className={styles.buttonRemove}>
                Remove
                <AiOutlineLine className={styles.icon} size={15} />
            </Button>
        </div>
    );
}
 
export default WorkWithCard;