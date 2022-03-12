import S from '@sanity/desk-tool/structure-builder'
import { singleton, list, group } from './helpers'
import { RiHomeGearFill, RiLayoutTop2Line, RiLayoutBottom2Line } from 'react-icons/ri'
import { AiFillNotification } from 'react-icons/ai'

const AllDocuments = S.documentTypeListItems()
	.filter(item => ![
		'site', 'header', 'footer',
		'page', 'news',
		'player', 'team',
	].includes(item.getId()))

export default () =>
	S.list()
		.title('Content')
		.items([
			group('Site settings', [
				singleton('Site settings', 'site').icon(RiHomeGearFill),
				singleton('Header', 'header').icon(RiLayoutTop2Line),
				singleton('Footer', 'footer').icon(RiLayoutBottom2Line),
			]).icon(RiHomeGearFill),

			list('Pages', 'page'),
			list('News', 'news').icon(AiFillNotification),

			S.divider(),

			list('Roster', 'player'),
			list('Teams', 'team'),

			...AllDocuments,
		])
