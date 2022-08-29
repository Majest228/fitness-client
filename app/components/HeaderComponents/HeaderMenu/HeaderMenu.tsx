import Image from 'next/image'
import styles from '../../../styles/headerMenu.module.sass'
import Catalog from '../../../assets/menu.svg'
import Search from '../../../assets/search.svg'
import Heart from '../../../assets/heart.svg'
import Char from '../../../assets/char.svg'
import Shop from '../../../assets/shop.svg'
import Link from 'next/link'

const HeaderMenu = (): JSX.Element => {
	return (
		<div className={styles.headerMenu}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.rightContent}>
						<button className={styles.catalog}>
							<Catalog />
							<p>Каталог</p>
						</button>
						<Search />
						<div className={styles.verticalLine}></div>
						<nav className={styles.nav}>
							<ul className={styles.list}>
								<li className={styles.listItem}>
									<Link href={`/`}>
										<a className={styles.listItemLink}>Бренды</a>
									</Link>
								</li>
								<li className={styles.listItem}>
									<Link href={`/`}>
										<a className={styles.listItemLink}>Сервис</a>
									</Link>
								</li>
								<li className={styles.listItem}>
									<Link href={`/`}>
										<a className={styles.listItemLink}>Услуги</a>
									</Link>
								</li>
								<li className={styles.listItem}>
									<Link href={`/`}>
										<a className={styles.listItemLink}>Поддержка</a>
									</Link>
								</li>
								<li className={styles.listItem}>
									<Link href={`/`}>
										<a className={styles.listItemLink}>О компании</a>
									</Link>
								</li>
								<li className={styles.listItem}>
									<Link href={`/`}>
										<a className={styles.listItemLink}>Блог</a>
									</Link>
								</li>
								<li className={styles.listItem}>
									<Link href={`/`}>
										<a className={styles.listItemLink}>Где купить</a>
									</Link>
								</li>
								<li className={styles.listItem}>
									<Link href={`/`}>
										<a className={styles.listItemLink}>Контакты</a>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
					<div className={styles.leftContent}>
						<div className={styles.char}>
							<Char />
							<div className={styles.count}>15</div>
						</div>
						<div className={styles.favourite}>
							<Heart />
							<div className={styles.count}>15</div>
						</div>
						<div className={styles.card}>
							<Shop />
							<div className={styles.count}>15</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderMenu
