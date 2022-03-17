import { useState } from 'react'
import css from './Header.module.css'
import Logo from './Logo'
import Links from './Links'
import LocaleSwitcher from 'lib/LocaleSwitcher'
import Toggle from './Toggle'
import clsx from 'clsx'

const Header = () => {
	const [$open, set$open] = useState(false)

	return (
		<header className={clsx(css.root, $open && css.open)}>
			<div className={css.inner}>
				<Logo />
				<Links $open={$open} />

				<div className={clsx(css.lang, $open && css.open)}>
					<LocaleSwitcher className="action-2" />
				</div>

				<Toggle state={[$open, set$open]} />
			</div>
		</header>
	)
}

export default Header
