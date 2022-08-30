import Image from 'next/image'
import styles from '../../styles/guide.module.sass'
import share1 from '../../assets/share1.png'
import Link from 'next/link'
import ArrowLink from '../../assets/arrowLink.svg'
const GuideItem = (): JSX.Element => {
	return (
		<div className={styles.guideItem}>
			<div className={styles.img}>
				<Image width={72} height={72} src={share1} alt='share1' />
			</div>
			<div className={styles.body}>
				<h3>Помощь покупателю</h3>
				<p>
					Узнайте как приобрести товар, способы доставки и оплаты, а также
					условия гарантии.
				</p>
				<Link href='/'>
					<div className={styles.linkBlock}>
						<a className={styles.link} href=''>
							Подробнее
						</a>
						<ArrowLink />
					</div>
				</Link>
			</div>
		</div>
	)
}

export default GuideItem
