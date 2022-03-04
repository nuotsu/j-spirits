import S from '@sanity/desk-tool/structure-builder'
import { singleton } from './helpers'

const AllDocuments = S.documentTypeListItems()
	.filter(item => ![
		'header',
	].includes(item.getId()))

export default () =>
	S.list()
		.title('Content')
		.items([
			singleton('Header', 'header'),

			...AllDocuments,
		])
