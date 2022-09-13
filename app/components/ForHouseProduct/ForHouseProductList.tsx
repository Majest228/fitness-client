import React from "react";
import styles from "../../styles/forhouse.module.sass";
import Housesvg from "../../assets/House.svg";
import ForHOuseProductItem from "./ForHouseProductItem";
const ForHouseProductList = (): JSX.Element => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.intro}>
          <div>
            <Housesvg />
            <p> Тренажеры для дома</p>
          </div>
          <h1>Тренажеры для дома</h1>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.mainContent}>
            <ForHOuseProductItem />
            <ForHOuseProductItem />
            <ForHOuseProductItem />
            <ForHOuseProductItem />
            <ForHOuseProductItem />
            <ForHOuseProductItem />
            <ForHOuseProductItem />
            <ForHOuseProductItem />
          </div>
        </div>
      </div>
    </>
  );
};
export default ForHouseProductList;
