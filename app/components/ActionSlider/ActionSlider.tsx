import Link from 'next/link'
import styles from '../../styles/action.module.sass'
import CardItem from '../CardItem/CardItem'

const ActionSlider = (): JSX.Element => {
	return (
		<div className={styles.action}>
			<ul className={styles.list}>
				<li className={styles.link}>
					<Link href='/'>
						<a className={styles.item}>Акция</a>
					</Link>
				</li>
				<li className={styles.link}>
					<Link href='/'>
						<a className={styles.item}>Новинки</a>
					</Link>
				</li>
				<li className={styles.link}>
					<Link href='/'>
						<a className={styles.item}>Мы рекомендуем</a>
					</Link>
				</li>
			</ul>
			<div className={styles.content}>
				<CardItem />
				<CardItem />
				<CardItem />
				<CardItem />
			</div>
		</div>
	)
}

export default ActionSlider
