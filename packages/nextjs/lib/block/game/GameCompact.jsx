import css from './GameCompact.module.css'
import Link from 'next/link'
import Date from 'lib/Date'
import Score from './Score'

const GameCompact = props => {
	const { date, status } = props

	return (
		<li className={`${css.root} first-of-type:j-gradient`}>
			<Link href={`/games#${ date }`}>
				<a className="flex flex-col h-full">
					<div className="flex gap-4 p-2 pb-0 justify-between">
						<Date date={date} />

						{status !== 'completed' && (
							<small className="chip">{status}</small>
						)}
					</div>

					<Score
						className="m-auto py-12 px-4 text-2xl"
						{...props}
					/>
				</a>
			</Link>
		</li>
	)
}

export default GameCompact
