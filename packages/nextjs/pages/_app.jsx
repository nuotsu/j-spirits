import Header from 'lib/header/Header'
import { GlobalProvider } from 'lib/store/Global'
import 'styles/app.css'

export default ({ Component, pageProps }) => {
	const { global, locale, ...componentProps } = pageProps

	const value = {
		...global,
		locale,
		locales: [
			{ value: 'en', label: '🇺🇸 English' },
			{ value: 'ja', label: '🇯🇵 日本語' },
		],
	}

	return (
		<GlobalProvider value={value}>
			<Header />

			<main>
				<Component {...componentProps} />
			</main>
		</GlobalProvider>
	)
}
