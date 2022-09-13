import React from "react";
import Image from "next/image";
import styles from "../../styles/forhouse.module.sass";
import itemjpg from "../../assets/item.jpg";
import { IForHouseProduct } from "./ForHouseProduct.types";

const ForHOuseProductItem = ({
  imageurl,
  title = "Кардиотренажеры",
  info = [
    {
      text: "Беговые дорожки",
      number: "57",
    },
    {
      text: "Беговые дорожки",
      number: "57",
    },
    {
      text: "Беговые дорожки",
      number: "57",
    },
    {
      text: "Беговые дорожки",
      number: "57",
    },
  ],
}: IForHouseProduct): JSX.Element => {
  return (
    <>
      <div className={styles.card}>
        <Image src={itemjpg} width={330} height={200} />
        <div className={styles.cardText}>
          <div className={styles.cardTitle}>{title}</div>
          <div className={styles.cardInfo}>
            <ul>
              {info.map((elem) => {
                return (
                  <>
                    <li>
                      <p className={styles.cardList}>{elem.text}</p>
                      <p className={styles.cardNumber}>{elem.number}</p>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default ForHOuseProductItem;
