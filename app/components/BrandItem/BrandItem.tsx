import Image from 'next/image'
import styles from '../../styles/brand.module.sass'
import brend from '../../assets/brand1.jpg'

const BrandItem = (): JSX.Element => {
	return (
		<div className={styles.brand}>
			<Image src={brend} alt='BREND' />
		</div>
	)
}

export default BrandItem
