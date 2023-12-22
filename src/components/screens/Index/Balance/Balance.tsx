import { FC } from "react";
import { BsArrowDown, BsArrowUp, BsPlusLg } from "react-icons/bs";

import Button from "../../../ui/Button/Button";

import styles from "./styles.module.scss"

const Balance: FC = () => {
    return (
        <div>
            <p className="mb-6 text-2xl">Total Balance</p>
            <h1 className="mb-6 text-6xl">29,475.00 <span className="text-2xl">usd</span></h1>
            <div className="flex gap-x-6 gap-y-2">
                <Button className="flex gap-2 text-white bg-purple">
                    Send
                    <BsArrowUp />
                </Button>
                <Button className="flex gap-2 bg-light-gray">
                    Request
                    <BsArrowDown />
                </Button>
                <Button className="flex gap-2 bg-light-gray">
                    Top up
                    <BsPlusLg />
                </Button>
            </div>
            
        </div>
    );
}
 
export default Balance;