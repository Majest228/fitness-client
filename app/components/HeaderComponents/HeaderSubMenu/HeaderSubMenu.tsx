import styles from '../../../styles/headerSubMenu.module.sass'
import ArrowWhite from '../../../assets/arrowWhite.svg'

const HeaderSubMenu = (): JSX.Element => {
	return (
		<div className={styles.subMenu}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.forHouse}>
						<p>Для дома</p>
						<ArrowWhite />
					</div>
					<div className={styles.verticalLine}></div>
					<div className={styles.forClub}>
						<p>Для фитнес клуба</p>
						<ArrowWhite />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderSubMenu
