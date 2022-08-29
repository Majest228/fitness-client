import type { NextPage } from 'next'
import { withLayout } from '../app/layouts/layout/Layout'
import HomePage from '../app/screens/Home/Home'

const Home: NextPage = () => {
	return (
		<>
			<HomePage />
		</>
	)
}

export default withLayout(Home)
