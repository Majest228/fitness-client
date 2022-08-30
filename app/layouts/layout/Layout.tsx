import { FunctionComponent } from 'react'
import Header from '../Header/Header'
import { LayoutProps } from './Layout.prop'
import styles from '../../styles/layout.module.sass'
import Footer from '../Footer/Footer'

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className={styles.layout}>
			<Header />
			<div>{children}</div>
			<Footer />
		</div>
	)
}

export const withLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		)
	}
}
