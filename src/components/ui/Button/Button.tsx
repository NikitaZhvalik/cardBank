import styles from "./styles.module.scss"
import classNames from "classnames"
import { IBtn } from "./button.inerface"

const Button = ({children, className, onClick, active, disabled}:IBtn) => {
    const clases = classNames(styles.btn, className, {active})

    return (
        <button className={clases} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}
 
export default Button;