export default external => !!external
	? { target: '_blank', rel: 'noopener noreferrer' }
	: {}
