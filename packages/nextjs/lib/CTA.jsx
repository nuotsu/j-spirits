import Link from 'next/link'
import Homeplate from './Homeplate'
import { MdOpenInNew } from 'react-icons/md'
import clsx from 'clsx'
import t from 'utils/locales'

const CTA = ({ link, style, className }) => {
	if (!link) return null

	const external = link._type === 'externalLink'

	const newtab = external
		? { target: '_blank', rel: 'noopener noreferrer' }
		: {}

	return (
		<Link href={link.internalUrl || link.url}>
			<a className={clsx(className, style)} {...newtab}>
				{(link.internalUrl === '/' && style !== 'link') && <Homeplate />}

				{t(link.label || link.page.title)}

				{external && <MdOpenInNew />}
			</a>
		</Link>
	)
}

export default CTA
