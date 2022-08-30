import styles from '../../styles/guide.module.sass'
import GuideItem from './GuideItem'

const GuideList = () => {
	return (
		<div className={styles.guide}>
			<div className={styles.content}>
				<GuideItem />
				<GuideItem />
				<GuideItem />
				<GuideItem />
			</div>
		</div>
	)
}

export default GuideList
