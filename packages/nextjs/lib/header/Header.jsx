import { useState } from 'react'
import css from './Header.module.css'
import Logo from './Logo'
import Links from './Links'
import clsx from 'clsx'

export default ({ menu }) => {
	const [$open, set$open] = useState(false)

	return (
		<header className={clsx(css.root, $open && css.open)}>
			<div className={css.inner}>
				<Logo />
				<Links menu={menu} $open={$open} />
			</div>
		</header>
	)
}
