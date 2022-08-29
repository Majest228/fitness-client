import styles from '../../styles/intro.module.sass'
import intro from '../../assets/intro.png'

import Image from 'next/image'
import Button from '../ui/Button/Button'

const IntroSlider = (): JSX.Element => {
	return (
		<div className={styles.intro}>
			<div className={styles.container}>
				<div className={styles.content}>
					<div className={styles.left}>
						<p>Zero Runner</p>
						<h3>
							Бег с нулевой ударной нагрузкой <br /> <span>на суставы</span>
						</h3>
						<Button br='red'>Узнать больше</Button>
					</div>
					<div className={styles.right}>
						<div className={styles.image}>
							<Image src={intro} width={510} height={500} />
						</div>
						<div className={styles.controll}>
							<button className={styles.btnLeft}></button>
							<button className={styles.btnRight}></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default IntroSlider
