import styles from "./styles.module.scss"
import classNames from "classnames"

const Button = ({children, className, onClick, active, disabled}:IBtn) => {
    const clases = classNames(styles.btn, className, {active})

    return (
        <button className={clases} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    )
}

interface IBtn {
    children: React.ReactNode
    className?: string
    onClick?: () => void
    active?: boolean
    disabled?: boolean
}
 
export default Button;