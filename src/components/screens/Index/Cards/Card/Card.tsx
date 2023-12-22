import { FC } from "react";

import mastercard from "../../../../../assets/imgs/cards/mastercard-icon.png";

import Button from "../../../../ui/Button/Button";

import styles from "./style.module.scss";

const Card: FC = () => {
  return (
    <div className={styles.card}>
      <div className={styles.nameContainer}>
        <Button className={styles.name} children={"Nikita Zhvalik"} />
        <div>
          <img src={mastercard} alt="" />
        </div>
      </div>
      <div className={styles.numContainer}>
        <Button className={styles.numCard} children={"0123 4567 8910"} />
        <Button className={styles.cvv} children={"CVV"} />
      </div>
    </div>
  );
};

export default Card;
