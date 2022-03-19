import Date from 'lib/Date'
import Score from './Score'
import Scoreboard from './Scoreboard'
import Link from 'next/link'
import t from 'utils/locale'
import clsx from 'clsx'

const Game = ({ className, ...props }) => {
	const { date, opponent, status, score, link } = props

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
						<a className="link" target="_blank" rel="noopener noreferrer">
							{t({
								en: 'View game details',
								ja: '試合の詳細を見る'
							})}
						</a>
					</Link>
				</p>
			)}
		</article>
	)
}

export default Game
