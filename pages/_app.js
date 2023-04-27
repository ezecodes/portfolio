import '../styles/globals.css'
import '../styles/animate.min.css'
import Layout from '../components/main/Layout'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
