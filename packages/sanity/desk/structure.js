import S from '@sanity/desk-tool/structure-builder'
import { singleton, list, group } from './helpers'
import { RiLayoutTop2Line, RiLayoutBottom2Line } from 'react-icons/ri'
import { GoJersey } from 'react-icons/go'

const AllDocuments = S.documentTypeListItems()
	.filter(item => ![
		'header', 'footer',
		'player',
	].includes(item.getId()))

export default () =>
	S.list()
		.title('Content')
		.items([
			group('Site settings', [
				singleton('Header', 'header').icon(RiLayoutTop2Line),
				singleton('Footer', 'footer').icon(RiLayoutBottom2Line),
			]),

			list('Roster', 'player').icon(GoJersey),

			...AllDocuments,
		])
