import S from '@sanity/desk-tool/structure-builder'
import { singleton, list, group } from './helpers'
import { RiLayoutTop2Line, RiLayoutBottom2Line } from 'react-icons/ri'

const AllDocuments = S.documentTypeListItems()
	.filter(item => ![
		'header', 'footer',
		'page',
		'player', 'team',
	].includes(item.getId()))

export default () =>
	S.list()
		.title('Content')
		.items([
			group('Site settings', [
				singleton('Header', 'header').icon(RiLayoutTop2Line),
				singleton('Footer', 'footer').icon(RiLayoutBottom2Line),
			]),

			list('Pages', 'page'),

			S.divider(),

			list('Roster', 'player'),
			list('Teams', 'team'),

			...AllDocuments,
		])
