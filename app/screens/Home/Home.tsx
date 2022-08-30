import Image from 'next/image'
import Link from 'next/link'
import ActionSlider from '../../components/ActionSlider/ActionSlider'
import CardItem from '../../components/CardItem/CardItem'
import Guide from '../../components/Guide/GuideItem'
import GuideList from '../../components/Guide/GuideList'
import IdeaComponent from '../../components/IdeaComponent/IdeaComponent'
import IntroSlider from '../../components/IntroSlider/IntroSlider'
import PopularBrends from '../../components/PopularBrends/PopularBrends'
import Button from '../../components/ui/Button/Button'
import Header from '../../layouts/Header/Header'
import styles from '../../styles/home.module.sass'
import subscribe from '../../assets/subscribe.png'

const Home = (): JSX.Element => {
	return (
		<>
			<div className={styles.home}>
				<IntroSlider />
				<div className={styles.container}>
					<section className={styles.simulatorsForHouse}>
						<h3 className={styles.simulatorsForHouseTitle}>
							Тренажеры для дома
						</h3>
						<div className={styles.simulatorsForHouseTop}>
							<div className={styles.simulatorsForHouseTopLeft}>
								<div className={styles.linkBig}>
									<Link href='/test'>
										<div className={styles.linkContent}>
											<a>
												Беговые <br /> дорожки
											</a>
										</div>
									</Link>
								</div>
								<div className={styles.linkBig}>
									<Link href='/test'>
										<div className={styles.linkContent}>
											<a>
												Эллиптические <br /> тренажеры
											</a>
										</div>
									</Link>
								</div>
							</div>
							<div className={styles.simulatorsForHouseTopCenter}>
								<div className={styles.linkCenter}>
									<Link href='/test'>
										<div className={styles.linkContent}>
											<a>Велотренажеры</a>
										</div>
									</Link>
								</div>
								<div className={styles.linkCenter}>
									<Link href='/test'>
										<div className={styles.linkContent}>
											<a>Велотренажеры</a>
										</div>
									</Link>
								</div>
								<div className={styles.linkCenter}>
									<Link href='/test'>
										<div className={styles.linkContent}>
											<a>Велотренажеры</a>
										</div>
									</Link>
								</div>
								<div className={styles.linkCenter}>
									<Link href='/test'>
										<div className={styles.linkContent}>
											<a>Велотренажеры</a>
										</div>
									</Link>
								</div>
							</div>
						</div>
						<div className={styles.simulatorsForHouseBottom}>
							<div className={styles.simulatorsForHouseBottomContent}>
								<div className={styles.linkBottomBlock}>
									<Link href='/test'>
										<div className={styles.linkBottomContent}>
											<a>Велотренажеры</a>
										</div>
									</Link>
								</div>
								<div className={styles.linkBottomBlock}>
									<Link href='/test'>
										<div className={styles.linkBottomContent}>
											<a>Велотренажеры</a>
										</div>
									</Link>
								</div>
								<div className={styles.linkBottomBlock}>
									<Link href='/test'>
										<div className={styles.linkBottomContent}>
											<a>Велотренажеры</a>
										</div>
									</Link>
								</div>
								<div className={styles.linkBottomBlock}>
									<Link href='/test'>
										<div className={styles.linkBottomContent}>
											<a>Велотренажеры</a>
										</div>
									</Link>
								</div>
							</div>
						</div>
						<Button br='red'>Все категории</Button>
					</section>
					<section className={styles.simulatorsForFitness}>
						<h3>Для фитнес клубов</h3>
						<div className={styles.simulatorsForFitnessTop}>
							<div className={styles.simulatorsForFitnessTopBig}>
								<h3>Профессиональные кардиотренажеры</h3>
							</div>
							<div className={styles.linkBottomBlock}>
								<Link href='/test'>
									<div className={styles.linkBottomContent}>
										<a>Велотренажеры</a>
									</div>
								</Link>
							</div>
							<div className={styles.linkBottomBlock}>
								<Link href='/test'>
									<div className={styles.linkBottomContent}>
										<a>Велотренажеры</a>
									</div>
								</Link>
							</div>
						</div>
						<div className={styles.simulatorsForFitnessBottom}>
							<div className={styles.linkBottomBlock}>
								<Link href='/test'>
									<div className={styles.linkBottomContent}>
										<a>Велотренажеры</a>
									</div>
								</Link>
							</div>
							<div className={styles.linkBottomBlock}>
								<Link href='/test'>
									<div className={styles.linkBottomContent}>
										<a>Велотренажеры</a>
									</div>
								</Link>
							</div>
							<div className={styles.linkBottomBlock}>
								<Link href='/test'>
									<div className={styles.linkBottomContent}>
										<a>Велотренажеры</a>
									</div>
								</Link>
							</div>
							<div className={styles.linkBottomBlock}>
								<Link href='/test'>
									<div className={styles.linkBottomContent}>
										<a>Велотренажеры</a>
									</div>
								</Link>
							</div>
						</div>
						<Button br='red'>Все категории</Button>
					</section>
					<section className={styles.actionCardsList}>
						<ActionSlider />
						<Button br='red'>Все товары по акции</Button>
					</section>
				</div>
				<section className={styles.idea}>
					<div className={styles.container}>
						<IdeaComponent />
					</div>
				</section>
				<section className={styles.brends}>
					<div className={styles.container}>
						<PopularBrends />
					</div>
				</section>
				<section className={styles.guide}>
					<div className={styles.container}>
						<GuideList />
					</div>
				</section>
				<section className={styles.subscribe}>
					<div className={styles.container}>
						<div className={styles.subscribeContent}>
							<div className={styles.subscribeContentImg}>
								<Image src={subscribe} alt='SUB' />
							</div>
							<div className={styles.subscribeContentText}>
								<p>
									Станьте нашим партнером <span>и получите возможность</span>{' '}
									представлять нашу продукцию в вашем регионе.
								</p>
								<Button br='white'>Стать партнером</Button>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default Home
