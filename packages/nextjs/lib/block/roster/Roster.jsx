import css from './Roster.module.css'
import { useContext, useState } from 'react'
import { GlobalContext } from 'lib/store/Global'
import HTag from 'lib/HTag'
import Sort from './Sort'
import t from 'utils/locales'

function sortBy(arr, key) {
	return arr.sort((a, b) => {
		if (a[key] < b[key]) return -1
		if (a[key] > b[key]) return 1
		return 0
	})
}

const Roster = ({ heading }) => {
	const { roster } = useContext(GlobalContext)
	const [$sort, set$sort] = useState('jersey')

	return (
		<section className="section-xl">
			<HTag className="h2 text-center" {...heading} />

			<div className="overflow-x-auto <md:full-width styled-shadow-ground">
				<table className={css.table}>
					<thead>
						<tr>
							<th>
								<Sort by="jersey" state={[$sort, set$sort]}>
									{t({ en: 'Jersey', ja: '背番号' })}
								</Sort>
							</th>
							<th>
								<Sort by="name" state={[$sort, set$sort]}>
									{t({ en: 'Name', ja: '選手名' })}
								</Sort>
							</th>
							<th>{t({ en: 'Position', ja: 'ポジション' })}</th>
							<th>{t({ en: 'Title', ja: '役職' })}</th>
							<th>{t({ en: 'B/T', ja: '打/投' })}</th>
						</tr>
					</thead>
					<tbody>
						{sortBy(roster, $sort)?.map((player, key) => (
							<tr key={key}>
								<td class="font-bold text-j-green-light text-xl">{player.jersey}</td>
								<td>{player.name}</td>
								<td>{player.position || ''}</td>
								<td>{t(player.title)}</td>
								<td>{player.bt || ''}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</section>
	)
}

export default Roster
