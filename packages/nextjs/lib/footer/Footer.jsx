import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'
import css from './Footer.module.css'
import Links from './Links'
import LocaleSwitcher from 'lib/LocaleSwitcher'
import Teams from './Teams'
import t from 'utils/locale'

const Footer = () => {
	const { site } = useContext(GlobalContext)

	return (
		<footer className="bg-j-green text-white">
			<div className="max-w-screen-xl mx-auto px-4">
				<div className={css.top}>
					<Links />
					<LocaleSwitcher className="action" />
				</div>

				<Teams />
			</div>

			<p className="bg-j-green-dark p-4 text-center text-xs">
				&copy; {new Date().getFullYear()} {t(site.title.full)}.
				All Rights Reserved.
			</p>
		</footer>
	)
}

export default Footer
