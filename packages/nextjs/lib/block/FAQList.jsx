import css from './FAQList.module.css'
import HTag from 'lib/HTag'
import PT from 'lib/pt/PT'

const FAQList = ({ heading, list }) => (
	<section className="section-md">
		<HTag className="h2" {...heading} />

		{list?.map(({ question, answer }, key) => (
			<details className={css.details} open key={key}>
				<summary className={css.question}>
					<PT value={question} />
				</summary>

				<PT className={css.answer} value={answer} />
			</details>
		))}
	</section>
)

export default FAQList
