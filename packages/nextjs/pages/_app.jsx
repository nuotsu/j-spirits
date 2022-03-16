import Header from 'lib/header/Header'
import '../styles/app.css'

export default ({ Component, pageProps }) => <>
	<Header />

	<main>
		<Component {...pageProps} />
	</main>
</>
