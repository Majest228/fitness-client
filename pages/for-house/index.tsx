import { withLayout } from "../../app/layouts/layout/Layout";
import styles from "../../app/styles/forhouse.module.sass";
import Housesvg from "../../app/assets/House.svg";
import Image from "next/image";
import itemjpg from "../../app/assets/item.jpg";

const ForHouse = (): JSX.Element => {
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
            <div className={styles.card}>
              <Image src={itemjpg} width={330} height={200} />
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>Кардиотренажеры</div>
                <div className={styles.cardInfo}>
                  <ul>
                    <li>
                      <p className={styles.cardList}>Беговые дорожки</p>
                      <p className={styles.cardNumber}>57</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Эллиптические тренажеры</p>
                      <p className={styles.cardNumber}>23</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Велотренажеры</p>
                      <p className={styles.cardNumber}>12</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Cтепперы</p>
                      <p className={styles.cardNumber}>10</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Гребные тренажеры</p>
                      <p className={styles.cardNumber}>15</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Сайклинг</p>
                      <p className={styles.cardNumber}>20</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Горнолыжные тренажеры</p>
                      <p className={styles.cardNumber}>18</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image src={itemjpg} width={330} height={200} />
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>Кардиотренажеры</div>
                <div className={styles.cardInfo}>
                  <ul>
                    <li>
                      <p className={styles.cardList}>Беговые дорожки</p>
                      <p className={styles.cardNumber}>57</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Эллиптические тренажеры</p>
                      <p className={styles.cardNumber}>23</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Велотренажеры</p>
                      <p className={styles.cardNumber}>12</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Cтепперы</p>
                      <p className={styles.cardNumber}>10</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Гребные тренажеры</p>
                      <p className={styles.cardNumber}>15</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Сайклинг</p>
                      <p className={styles.cardNumber}>20</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Горнолыжные тренажеры</p>
                      <p className={styles.cardNumber}>18</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image src={itemjpg} width={330} height={200} />
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>Кардиотренажеры</div>
                <div className={styles.cardInfo}>
                  <ul>
                    <li>
                      <p className={styles.cardList}>Беговые дорожки</p>
                      <p className={styles.cardNumber}>57</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Эллиптические тренажеры</p>
                      <p className={styles.cardNumber}>23</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Велотренажеры</p>
                      <p className={styles.cardNumber}>12</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Cтепперы</p>
                      <p className={styles.cardNumber}>10</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Гребные тренажеры</p>
                      <p className={styles.cardNumber}>15</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Сайклинг</p>
                      <p className={styles.cardNumber}>20</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Горнолыжные тренажеры</p>
                      <p className={styles.cardNumber}>18</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image src={itemjpg} width={330} height={200} />
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>Кардиотренажеры</div>
                <div className={styles.cardInfo}>
                  <ul>
                    <li>
                      <p className={styles.cardList}>Беговые дорожки</p>
                      <p className={styles.cardNumber}>57</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Эллиптические тренажеры</p>
                      <p className={styles.cardNumber}>23</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Велотренажеры</p>
                      <p className={styles.cardNumber}>12</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Cтепперы</p>
                      <p className={styles.cardNumber}>10</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Гребные тренажеры</p>
                      <p className={styles.cardNumber}>15</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Сайклинг</p>
                      <p className={styles.cardNumber}>20</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Горнолыжные тренажеры</p>
                      <p className={styles.cardNumber}>18</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image src={itemjpg} width={330} height={200} />
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>Кардиотренажеры</div>
                <div className={styles.cardInfo}>
                  <ul>
                    <li>
                      <p className={styles.cardList}>Беговые дорожки</p>
                      <p className={styles.cardNumber}>57</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Эллиптические тренажеры</p>
                      <p className={styles.cardNumber}>23</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Велотренажеры</p>
                      <p className={styles.cardNumber}>12</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Cтепперы</p>
                      <p className={styles.cardNumber}>10</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Гребные тренажеры</p>
                      <p className={styles.cardNumber}>15</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Сайклинг</p>
                      <p className={styles.cardNumber}>20</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Горнолыжные тренажеры</p>
                      <p className={styles.cardNumber}>18</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image src={itemjpg} width={330} height={200} />
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>Кардиотренажеры</div>
                <div className={styles.cardInfo}>
                  <ul>
                    <li>
                      <p className={styles.cardList}>Беговые дорожки</p>
                      <p className={styles.cardNumber}>57</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Эллиптические тренажеры</p>
                      <p className={styles.cardNumber}>23</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Велотренажеры</p>
                      <p className={styles.cardNumber}>12</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Cтепперы</p>
                      <p className={styles.cardNumber}>10</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Гребные тренажеры</p>
                      <p className={styles.cardNumber}>15</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Сайклинг</p>
                      <p className={styles.cardNumber}>20</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Горнолыжные тренажеры</p>
                      <p className={styles.cardNumber}>18</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image src={itemjpg} width={330} height={200} />
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>Кардиотренажеры</div>
                <div className={styles.cardInfo}>
                  <ul>
                    <li>
                      <p className={styles.cardList}>Беговые дорожки</p>
                      <p className={styles.cardNumber}>57</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Эллиптические тренажеры</p>
                      <p className={styles.cardNumber}>23</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Велотренажеры</p>
                      <p className={styles.cardNumber}>12</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Cтепперы</p>
                      <p className={styles.cardNumber}>10</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Гребные тренажеры</p>
                      <p className={styles.cardNumber}>15</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Сайклинг</p>
                      <p className={styles.cardNumber}>20</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Горнолыжные тренажеры</p>
                      <p className={styles.cardNumber}>18</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <Image src={itemjpg} width={330} height={200} />
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>Кардиотренажеры</div>
                <div className={styles.cardInfo}>
                  <ul>
                    <li>
                      <p className={styles.cardList}>Беговые дорожки</p>
                      <p className={styles.cardNumber}>57</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Эллиптические тренажеры</p>
                      <p className={styles.cardNumber}>23</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Велотренажеры</p>
                      <p className={styles.cardNumber}>12</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Cтепперы</p>
                      <p className={styles.cardNumber}>10</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Гребные тренажеры</p>
                      <p className={styles.cardNumber}>15</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Сайклинг</p>
                      <p className={styles.cardNumber}>20</p>
                    </li>
                    <li>
                      <p className={styles.cardList}>Горнолыжные тренажеры</p>
                      <p className={styles.cardNumber}>18</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withLayout(ForHouse);
