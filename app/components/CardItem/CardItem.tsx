import styles from '../../styles/card.module.sass'
import card from '../../assets/card1.png'
import instock from '../../assets/instock.svg'
import procent from '../../assets/procent.png'
import like from '../../assets/like.png'
import stats from '../../assets/stats.svg'
import favourite from '../../assets/favourite.svg'
import Image from 'next/image'
import Star from '../../assets/star.svg'
import Cart from '../../assets/cart.svg'

const CardItem = (): JSX.Element => {
	return (
		<div className={styles.card}>
			<Image src={card} />
			<div className={styles.cardTop}>
				<div className={styles.cardTopLeft}>
					<div className={styles.cardTopLeftProcent}>
						<Image src={procent} />
					</div>
					<div className={styles.cardTopLeftLike}>
						<Image src={like} />
					</div>
					<div className={styles.cardTopLeftNew}>NEW</div>
				</div>
				<div className={styles.cardTopRight}>
					<div className={styles.cardTopRightStats}>
						<Image src={stats} />
					</div>
					<div className={styles.cardTopRightFavourite}>
						<Image src={favourite} />
					</div>
				</div>
			</div>
			<div className={styles.cardBody}>
				<div className={styles.cardBodyTop}>
					<div className={styles.cardBodyTopInStock}>
						<p>В наличии</p>
						<Image src={instock} />
					</div>
					<div className={styles.cardBodyTopHave}>
						<p>Есть в шоу-руме</p>
					</div>
				</div>
			</div>
			<div className={styles.cardBodyDescription}>
				<p className={styles.cardBodyDescriptionTitle}>
					Беговая дорожка CardioPower S35
				</p>
				<div className={styles.cardBodyDescriptionRating}>
					<span>Рейтинг</span>
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
				</div>
			</div>
			<div className={styles.cardBodyBottom}>
				<div className={styles.cardBodyBottomPrice}>
					<p className={styles.cardBodyBottomPriceNew}>1 134 900 ₽</p>
					<p className={styles.cardBodyBottomPriceOld}>1 134 900 ₽</p>
				</div>
				<button className={styles.button}>
					<Cart />
					<p>Купить</p>
				</button>
			</div>
		</div>
	)
}

export default CardItem
