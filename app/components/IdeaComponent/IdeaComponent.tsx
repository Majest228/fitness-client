import Image from 'next/image'
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import styles from '../../styles/idea.module.sass'
import Button from '../ui/Button/Button'

const IdeaComponent = (): JSX.Element => {
	return (
		<div className={styles.idea}>
			<h3>Идеи и подборки</h3>
			<div className={styles.content}>
				<Image src={banner1} />
				<Image src={banner2} />
				<Image src={banner3} />
			</div>
			<Button br='white'>Полная подборка</Button>
		</div>
	)
}

export default IdeaComponent
