import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'
import clsx from 'clsx'
import t from 'utils/locales'
import { total } from 'utils/game'

const Score = ({ opponent, status, order, score, className }) => {
	const { site } = useContext(GlobalContext)

	const home = !['away', 'bat first'].includes(order) ? site.title.short : opponent.name.short
	const away = ['away', 'bat first'].includes(order) ? site.title.short : opponent.name.short

	return (
		<div className={clsx(className, 'flex items-center justify-center gap-2 mx-auto')}>
			{status === 'completed'
				? <>
					{away}
					<b className="text-[2em]">{total(score)}</b>
					-
					<b className="text-[2em]">{total(score, 1)}</b>
					{home}
				</> : <>
					<b className="text-[1.5em]">{away}</b>
					vs
					<b className="text-[1.5em]">{home}</b>
				</>
			}
		</div>
	)
}

export default Score
