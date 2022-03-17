import Link from 'next/link'
import css from './Logo.module.css'
import DarkLogo from 'public/jspirits-logo-dark.svg'

const Logo = () => (
	<div className="self-start">
		<Link href="/">
			<a className={css.root}>
				<DarkLogo height={60} />
			</a>
		</Link>
	</div>
)

export default Logo
