import { FC } from "react";

import Button from "../../../../ui/Button/Buttom";

import styles from "./styles.module.scss"

const WorkWithCard:FC = () => {
    return (
        <div className={styles.buttons}>
            <Button className={styles.buttonAdd}>
                Add Card
                <svg xmlns="<http://www.w3.org/2000/svg>" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </Button>
            <Button className={styles.buttonRemove}>
                Remove
                <svg xmlns="<http://www.w3.org/2000/svg>" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                </svg>
            </Button>
        </div>
    );
}
 
export default WorkWithCard;