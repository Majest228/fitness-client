import Link from 'next/link'
import styles from '../../styles/popularBrends.module.sass'
import BrandItem from '../BrandItem/BrandItem'
import Button from '../ui/Button/Button'

const PopularBrends = (): JSX.Element => {
	return (
		<div className={styles.popular}>
			<h3>Популярные бренды</h3>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link href='/'>
						<a className={styles.link}>Беговые дорожки</a>
					</Link>
				</li>
				<li className={styles.item}>
					<Link href='/'>
						<a className={styles.link}>Эллиптические тренажеры</a>
					</Link>
				</li>
				<li className={styles.item}>
					<Link href='/'>
						<a className={styles.link}>Велотренажеры</a>
					</Link>
				</li>
				<li className={styles.item}>
					<Link href='/'>
						<a className={styles.link}>Силовые тренажеры</a>
					</Link>
				</li>
				<li className={styles.item}>
					<Link href='/'>
						<a className={styles.link}>Батуты</a>
					</Link>
				</li>
				<li className={styles.item}>
					<Link href='/'>
						<a className={styles.link}>Игровые столы</a>
					</Link>
				</li>
			</ul>
			<div className={styles.popularContent}>
				<BrandItem />
				<BrandItem />
				<BrandItem />
				<BrandItem />
				<BrandItem />
				<BrandItem />
				<BrandItem />
				<BrandItem />
				<BrandItem />
				<BrandItem />
				<BrandItem />
				<BrandItem />
				<BrandItem />
				<BrandItem />
				<BrandItem />
			</div>
			<Button br='red'>Все бренды</Button>
		</div>
	)
}

export default PopularBrends
