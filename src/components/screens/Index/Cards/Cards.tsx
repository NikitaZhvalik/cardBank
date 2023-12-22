import { FC } from "react";
import { AiFillCreditCard, AiOutlineEyeInvisible, AiFillSecurityScan, AiTwotoneEdit } from "react-icons/ai";

import Details from "./Details/Details";
import WorkWithCard from "./WorkWithCard/WorkWithCard";
import WorkWithCards from "./WorkWithCards/WorkWithCards";
import Card from "./Card/Card";

import styles from "./styles.module.scss"

const Cards:FC = () => {
    return (
        <>
            <div className={styles.container}>
                <WorkWithCards/>
                <Card />
            </div>
            <div className={styles.container}>
                <Details children={'Show Card Details'} img={<AiFillCreditCard size={30}/>} alt={'details'}/>
                <Details children={'Show Card Details'} img={<AiOutlineEyeInvisible size={30}/>} alt={'details'}/>
                <Details children={'Show Card Details'} img={<AiFillSecurityScan size={30}/>} alt={'details'}/>
                <Details children={'Show Card Details'} img={<AiTwotoneEdit size={30}/>} alt={'details'}/>
            </div>
            <WorkWithCard />
        </>
    )
}
 
export default Cards;