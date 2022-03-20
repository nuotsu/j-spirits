import { default as NextLink } from 'next/link'
import newtab from 'utils/newtab'

const Link = ({ value, children}) => {
	return (
		<NextLink href={value.href} {...newtab(value.href.startsWith('http'))}>
			<a className="link text-j-green-light">
				{children}
			</a>
		</NextLink>
	)
}

export default Link
