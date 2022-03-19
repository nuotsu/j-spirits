import { PortableText } from '@portabletext/react'
import t from 'utils/locales'

const defaultComponents = {
	types: {},
	list: {
		bullet: ({ children }) => <ul className="list-[square] pl-6">{children}</ul>,
		number: ({ children }) => <ol className="list-decimal pl-6">{children}</ol>,
	},
}

const Content = ({ value, components: componentsOverrides }) => {
	const components = {
		...defaultComponents,
		...componentsOverrides,
	}

	return <PortableText value={t(value)} components={components} />
}

const PT = ({ className, ...props }) => !!className
	? <div className={className}>
		<Content {...props} />
	</div>
	: <Content {...props} />

export default PT
