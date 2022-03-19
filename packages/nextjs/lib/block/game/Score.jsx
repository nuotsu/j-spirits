import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'
import clsx from 'clsx'
import t from 'utils/locales'
import { total } from 'utils/game'

const Score = ({ opponent, status, score, className }) => {
	const { site } = useContext(GlobalContext)

	return (
		<div className={clsx(className, 'flex items-center justify-center gap-2 mx-auto')}>
			{status === 'completed'
				? <>
					{site.title.short}
					<b className="text-[2em]">{total(score)}</b>
					-
					<b className="text-[2em]">{total(score, 1)}</b>
					{opponent.name.short}
				</> : <>
					<b className="text-[1.5em]">{site.title.short}</b>
					vs
					<b className="text-[1.5em]">{opponent.name.short}</b>
				</>
			}
		</div>
	)
}

export default Score
