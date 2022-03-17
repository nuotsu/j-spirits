import Link from 'next/link'
import clsx from 'clsx'
import t from 'utils/locale'

const CTA = ({ link, style, className }) => {
	const external = link._type === 'externalLink'
		? { target: '_blank', rel: 'noopener noreferrer' }
		: {}

	return (
		<Link href={link.internalUrl || link.url}>
			<a className={clsx(className, style)} {...external}>
				{t(link.label || link.page.title)}
			</a>
		</Link>
	)
}

export default CTA
