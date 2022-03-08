<section class="max-w-screen-xl mx-auto px-4">
	<h2 class="h2">{$t(title)}</h2>

	<Form name="contact" class="grid gap-2">
		<label>
			<input name="name" type="text" autocomplete="name" placeholder={$t({ en: 'Name', ja: '名前' })} required>
		</label>

		<label>
			<input name="email" type="email" autocomplete="email" placeholder={$t({ en: 'Email', ja: 'メールアドレス' })} required>
		</label>

		<label>
			<textarea name="message" placeholder={$t({ en: 'Message', ja: 'メッセージ' })} required />
		</label>

		<button class="action">{$t({ en: 'Submit', ja: '送信' })}</button>
	</Form>
</section>

<style>
	label {
		display: block;
	}

	input,
	textarea {
		width: 100%;
	}
</style>

<script>
	import { t } from '~/utils/locales'
	import Form from './NetlifyForm.svelte'

	export let title
</script>
