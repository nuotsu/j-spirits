export default (external = true) => external
	? { target: '_blank', rel: 'noopener noreferrer' }
	: {}
