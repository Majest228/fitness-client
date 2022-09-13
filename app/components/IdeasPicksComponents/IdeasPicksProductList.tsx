import React from "react";
import styles from "../../styles/ideaspicks.module.sass";
import Housesvg from "../../assets/House.svg";
import { IdeasPicksProductBanner } from "./IdeasPicksProductBanner";

export const IdeasPicksProductList = (): JSX.Element => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.intro}>
          <div>
            <Housesvg />
            <p> Идеи и подборки </p>
          </div>
          <h1>Идеи и подборки </h1>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.mainContent}>
            <IdeasPicksProductBanner />
            <IdeasPicksProductBanner />
            <IdeasPicksProductBanner />
            <IdeasPicksProductBanner />
            <IdeasPicksProductBanner />
            <IdeasPicksProductBanner />
            <IdeasPicksProductBanner />
            <IdeasPicksProductBanner />
            <div className={styles.switch}>
              <div className={styles.switchMore}>
                <p>Показать еще</p>
              </div>
              <div className={styles.switchList}>
                <div className={styles.SwitchListItem + " " + styles.selected}>
                  1
                </div>
                <div className={styles.SwitchListItem}>2</div>
                <div className={styles.SwitchListItem}>3</div>
                <div className={styles.SwitchListItem}>4</div>
                <div className={styles.SwitchListItem}>...</div>
                <div className={styles.SwitchListItem}>10</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
