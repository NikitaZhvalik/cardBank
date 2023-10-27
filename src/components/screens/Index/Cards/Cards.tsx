import { FC } from "react";

import details from "../../../../assets/imgs/cards/details.png"
import pin from "../../../../assets/imgs/cards/pin.png"
import security from "../../../../assets/imgs/cards/security.png"
import limits from "../../../../assets/imgs/cards/limits.png"

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
                <Details children={'Show Card Details'} img={details} alt={'details'}/>
                <Details children={'Your PIN'} img={pin} alt={'details'}/>
                <Details children={'Security Code'} img={security} alt={'details'}/>
                <Details children={'Edit Limits'} img={limits} alt={'details'}/>
            </div>
            <WorkWithCard />
        </>
    )
}
 
export default Cards;