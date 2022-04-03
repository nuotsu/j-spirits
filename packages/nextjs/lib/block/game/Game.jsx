import Date from 'lib/Date'
import Score from './Score'
import Scoreboard from './Scoreboard'
import Link from 'next/link'
import t from 'utils/locales'
import clsx from 'clsx'
import PT from 'lib/pt/PT'

const Game = ({ className, detailsLabel, ...props }) => {
	const { date, opponent, status, score, link, notes } = props

	return (
		<article id={date} className={clsx(className, 'grid gap-4 bg-white text-j-green p-4 styled-shadow-ground')}>
			<Date date={date} />

			<Score
				className={`${status === 'completed' ? 'text-xl' : 'text-2xl'}`}
				{...props}
			/>

			{status === 'completed'
				? <Scoreboard {...props} />
				: (
					<p className="text-center">
						<small className="chip">
							{status}
						</small>
					</p>
				)
			}

			{!!link && (
				<p className="text-right">
					<Link href={link}>
						<a className="link text-j-green-light" target="_blank" rel="noopener noreferrer">
							{t(detailsLabel)}
						</a>
					</Link>
				</p>
			)}

			{!!notes && (
				<div>
					<h2 className="text-ground-dark font-bold text-sm uppercase">Notes</h2>
					<PT value={notes} />
				</div>
			)}
		</article>
	)
}

export default Game
