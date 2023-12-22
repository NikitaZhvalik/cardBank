import { FC } from "react";

import Button from "../../../../ui/Button/Button";

import { IDetails } from "./details.interface";
import styles from "./style.module.scss";

const Details: FC<IDetails> = ({ children, img, alt }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        {img}
      </div>
      <Button className={styles.button} children={children} />
    </div>
  );
};

export default Details;
