import css from './ContactForm.module.css'
import HTag from 'lib/HTag'
import Form from './Form'
import t from 'utils/locale'

const ContactForm = ({ heading }) => (
	<section className="max-w-screen-md mx-auto px-4">
		<HTag className="h2 text-center" {...heading} />

		<Form name="contact" className={css.form}>
			<label>
				<input class="input" name="name" type="text" autocomplete="name" placeholder={t({ en: 'Name', ja: '名前' })} required />
			</label>

			<label>
				<input class="input" name="email" type="email" autocomplete="email" placeholder={t({ en: 'Email', ja: 'メールアドレス' })} required />
			</label>

			<label>
				<textarea class="input" name="message" placeholder={t({ en: 'Message', ja: 'メッセージ' })} required />
			</label>

			<button class="action">{t({ en: 'Submit', ja: '送信' })}</button>
		</Form>
	</section>
)

export default ContactForm
