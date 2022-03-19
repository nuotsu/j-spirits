import css from './ContactForm.module.css'
import HTag from 'lib/HTag'
import Form from './Form'
import t from 'utils/locale'

const ContactForm = ({ heading }) => (
	<section className="section-md">
		<HTag className="h2 text-center" {...heading} />

		<Form className={css.form} name="contact" action="/contact/thank-you">
			<label>
				<input
					className="input"
					name="name"
					type="text"
					autoComplete="name"
					placeholder={t({ en: 'Name', ja: '名前' })}
					required
				/>
			</label>

			<label>
				<input
					className="input"
					name="email"
					type="email"
					autoComplete="email"
					placeholder={t({ en: 'Email', ja: 'メールアドレス' })}
					required
				/>
			</label>

			<label>
				<textarea
					className="input"
					name="message"
					placeholder={t({ en: 'Message', ja: 'メッセージ' })}
					required
				/>
			</label>

			<button className="action">
				{t({ en: 'Submit', ja: '送信' })}
			</button>
		</Form>
	</section>
)

export default ContactForm
