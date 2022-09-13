import React from "react";
import Image from "next/image";
import bannerjpg from "../../assets/banner1.jpg";
import styles from "../../styles/ideaspicks.module.sass";

export const IdeasPicksProductBanner = (): JSX.Element => {
  return (
    <>
      <div className={styles.banner}>
        <Image src={bannerjpg} width={690} height={400} />
      </div>
    </>
  );
};
