import css from './ContactForm.module.css'
import HTag from 'lib/HTag'
import Form from './NetlifyForm'
import t from 'utils/locales'
import PT from 'lib/pt/PT'

const ContactForm = ({ heading, richtext }) => (
	<section className="section-md">
		<header className="text-center mb-8">
			<HTag className="h2 text-center" {...heading} />
			<PT value={richtext} />
		</header>

		<Form className={css.form} name="contact" action="contact/thank-you">
			<label htmlFor="name">
				<input
					className="input"
					id="name" name="name"
					type="text"
					autoComplete="name"
					placeholder={t({ en: 'Name', ja: '名前' })}
					required
				/>
			</label>

			<label htmlFor="email">
				<input
					className="input"
					id="email" name="email"
					type="email"
					autoComplete="email"
					placeholder={t({ en: 'Email', ja: 'メールアドレス' })}
					required
				/>
			</label>

			<label htmlFor="message">
				<textarea
					className="input min-h-[4em]"
					rows={3}
					id="message" name="message"
					placeholder={t({ en: 'Message', ja: 'メッセージ' })}
					required
				/>
			</label>

			<button className="action" type="submit">
				{t({ en: 'Submit', ja: '送信' })}
			</button>
		</Form>
	</section>
)

export default ContactForm
