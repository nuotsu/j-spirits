import css from './Footer.module.css'
import Links from './Links'
import LocaleSwitcher from 'lib/LocaleSwitcher'

export default () => (
	<footer className="bg-j-green text-white">
		<div className="max-w-screen-xl mx-auto px-4">
			<div className={css.inner}>
				<Links />
				<LocaleSwitcher className="action" />
			</div>
		</div>
	</footer>
)
