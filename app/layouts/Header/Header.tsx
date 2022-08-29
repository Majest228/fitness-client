import styles from '../../styles/header.module.sass'
import Logo from '../../assets/logo.svg'
import Arrow from '../../assets/arrow.svg'
import User from '../../assets/user.svg'
import HeaderMenu from '../../components/HeaderComponents/HeaderMenu/HeaderMenu'
import HeaderSubMenu from '../../components/HeaderComponents/HeaderSubMenu/HeaderSubMenu'

const Header = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.headerContent}>
					<div className={styles.headerLeftContent}>
						<Logo />
						<div className={styles.headerCities}>
							<span>Москва</span>
							<Arrow />
						</div>
					</div>
					<div className={styles.headerRightContent}>
						<div className={styles.forDiler}>
							<p>Для дилеров</p>
						</div>
						<button className={styles.becomePartner}>Become a Partner </button>
						<div className={styles.verticalLine}></div>
						<div className={styles.phoneNumber}>
							<p className={styles.phoneNumberTitle}>+7 (800) 000-00-00</p>
							<div className={styles.chooseNumber}>
								<p>МСК</p>
								<Arrow />
							</div>
						</div>
						<div className={styles.callDelivery}>
							<p>Заказать звонок</p>
						</div>
						<div className={styles.verticalLine}></div>
						<div className={styles.auth}>
							<p>Войти</p>
							<User />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.horizontalLine}></div>
			<HeaderMenu />
			<HeaderSubMenu />
		</header>
	)
}

export default Header
