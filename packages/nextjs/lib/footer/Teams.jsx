import { useContext } from 'react'
import { GlobalContext } from 'lib/store/Global'
import t from 'utils/locale'
import Img from 'lib/img/SanityImage'
import css from './Teams.module.css'

const Teams = () => {
	const { teams } = useContext(GlobalContext)

	return (
		<div className={css.root}>
			<h2 className="text-center">
				<a href="https://www.lasbl-baseball.com/" target="_blank" rel="noopener noreferrer">
				<span class="text-2xl">LASBL</span>
				<small class="block text-xs">
					{t({
						en: 'Los Angeles Safety Baseball League',
						ja: 'ロサンゼルス軟式草野球リーグ'
					})}
				</small>
				</a>
			</h2>

			<ul className={css.list}>
				{teams?.map((team, key) => (
					<li key={key}>
						<a
							href={team.link}
							target="_blank" rel="noopener noreferrer"
							title={`${team.name.full} (${team.name.short})`}
						>
							<Img
								image={team.image}
								builder={b => b.width(150).height(75)}
								alt={team.name.full}
							/>
						</a>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Teams
