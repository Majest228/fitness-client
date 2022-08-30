import Link from 'next/link'
import styles from '../../styles/footer.module.sass'
import Message from '../../assets/message.svg'

const Footer = (): JSX.Element => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footerUp}>
					<div className={styles.footerContent}>
						<div className={styles.footerContentNavigation}>
							<nav className={styles.footerNav}>
								<ul className={styles.footerList}>
									<p className={styles.footerTitle}>Каталог</p>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Для дома</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Для фитнес клубов</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Акции</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Идеи и подборки </a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Новинки</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Наши бренды</a>
										</Link>
									</li>
								</ul>
							</nav>
							<nav className={styles.footerNav}>
								<ul className={styles.footerList}>
									<p className={styles.footerTitle}>Поддержка</p>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Доставка и оплата</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Условия возврата</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Сервисная заявка</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>
												Обслуживание фитнес клубов
											</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>FAQ</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Инструкции</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Гарантия</a>
										</Link>
									</li>
								</ul>
							</nav>
							<nav className={styles.footerNav}>
								<ul className={styles.footerList}>
									<p className={styles.footerTitle}>Услуги</p>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>3D проект</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Консалтинг</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Бизнес планирование</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Лизинг</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Trade-IN</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>В рассрочку</a>
										</Link>
									</li>
								</ul>
							</nav>
							<nav className={styles.footerNav}>
								<ul className={styles.footerList}>
									<p className={styles.footerTitle}>О компании</p>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>О нас</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Наша миссия</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Наша команда</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Наши проекты</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Новости</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Блог</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Где купить</a>
										</Link>
									</li>
									<li className={styles.footerItem}>
										<Link href='/'>
											<a className={styles.footerLink}>Контакты</a>
										</Link>
									</li>
								</ul>
							</nav>
						</div>
						<div className={styles.footerContentInfo}>
							<div className={styles.footerContentInfoInput}>
								<input type='text' placeholder='Подписаться на рассылку' />
								<button>
									<Message />
								</button>
							</div>
							<div className={styles.footerContentInfoPhones}>
								<p>+7 (000) 000-00-00 для Москвы</p>
								<p>8 (800) 000-00-00 для России</p>
								<button>Заказать звонок</button>
							</div>
							<div className={styles.footerContentInfoMail}>
								<p>wellfitness@wellfit.ru</p>
								<button>Написать</button>
							</div>
							<div className={styles.footerContentInfoLinks}>
								<Link href='/'>
									<a className={styles.link}>Политика конфиденциальности</a>
								</Link>
								<Link href='/'>
									<a className={styles.link}>Публичная офферта</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.footerDown}>
					<div className={styles.footerContent}></div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
