import classNames from 'clsx'
import styles from '../../../styles/button.module.sass'
import { ButtonInterface } from './Button.interface'

const Button = ({ children, br }: ButtonInterface): JSX.Element => {
	return (
		<button
			className={classNames(styles.button, {
				[styles.red]: br == 'red',
				[styles.white]: br == 'white',
			})}
		>
			{children}
		</button>
	)
}

export default Button
