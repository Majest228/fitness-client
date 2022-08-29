import { HeaderTagInterface } from './HeaderTag.interface'
import classname from 'clsx'
import styles from '../../../styles/headertag.module.sass'

const HeaderTag = ({
	children,
	tag,
	version,
}: HeaderTagInterface): JSX.Element => {
	switch (tag) {
		case 'h1':
			return (
				<h1
					className={classname(styles.tag, {
						[styles.h2Desk]: version == 'desktop',
						[styles.h2Mob]: version == 'mobile',
						[styles.h2Tab]: version == 'tablet',
					})}
				>
					{children}
				</h1>
			)
		case 'h2':
			return (
				<h2
					className={classname(styles.tag, {
						[styles.h2Desk]: version == 'desktop',
						[styles.h2Mob]: version == 'mobile',
						[styles.h2Tab]: version == 'tablet',
					})}
				>
					{children}
				</h2>
			)
		default:
			return <></>
	}
}

export default HeaderTag
