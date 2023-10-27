import { FC } from "react";

import Button from "../../../../ui/Button/Buttom";

import styles from "./style.module.scss"

const Details:FC<IDetails> = ({children, img, alt}) => {
    return (
        <div className={styles.container}>
            <div className={styles.img}>
               <img src={img} alt={alt} /> 
            </div>
            <Button className={styles.button} children={children} />
        </div>
    )
}

interface IDetails {
    children: string
    img: string
    alt: string
}
 
export default Details;