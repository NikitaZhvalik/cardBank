import { FC } from "react";
import styles from "./styles.module.scss"
import Button from "../../../ui/Button/Buttom";

const InviteCode:FC = () => {
    return (
        <div className="">
            <p className="max-w-xs text-light">InviteCode a friend with code below and redeem special bonus USD 15 from us!</p>
            <Button className="p-0 text-light" children={'NIKITAZHVALIK-OCT2023'} />
        </div>
    )
}
 
export default InviteCode;