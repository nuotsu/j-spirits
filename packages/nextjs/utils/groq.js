const internalLink = `
	'internalUrl': '/' + link->slug.current,
	'page': link->{title},
	label
`

const cta = `
	link[0]{
		_type,
		url,
		${internalLink}
	},
	style
`

export default {
	internalLink,
	cta,
}
