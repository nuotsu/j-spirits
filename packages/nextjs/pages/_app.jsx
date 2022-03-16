import Header from 'lib/header/Header'
import { GlobalProvider } from 'lib/store/Global'
import 'styles/app.css'

export default ({ Component, pageProps }) => {
	const { global, ...componentProps } = pageProps
	const { header, ...globalProps } = global

	const value = {
		...globalProps,
		locale: pageProps.locale,
	}

	return (
		<GlobalProvider value={value}>
			<Header {...header} />

			<main>
				<Component {...componentProps} />
			</main>
		</GlobalProvider>
	)
}
