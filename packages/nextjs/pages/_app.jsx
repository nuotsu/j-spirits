import { GlobalProvider } from 'lib/store/Global'
import Header from 'lib/header/Header'
import Footer from 'lib/footer/Footer'
import css from './_app.module.css'
import 'styles/app.css'

const App = ({ Component, pageProps }) => {
	const { global, locale, ...componentProps } = pageProps

	const value = {
		...global,
		locale,
	}

	return (
		<GlobalProvider value={value}>
			<Header />

			<main className={css.main}>
				<Component {...componentProps} />
			</main>

			<Footer />
		</GlobalProvider>
	)
}

export default App
