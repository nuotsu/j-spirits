import css from './HeroHome.module.css'
import HTag from 'lib/HTag'

const HeroHome = ({ heading }) => (
	<section className="max-w-screen-xl mx-auto p-4 text-center">
		<div className={`${css.inner} j-gradient`}>
			<HTag className={css.heading} {...heading} />
		</div>
	</section>
)

export default HeroHome
