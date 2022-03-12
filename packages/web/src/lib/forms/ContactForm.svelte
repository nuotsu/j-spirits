<section class="max-w-screen-md mx-auto px-4">
	<HTag class="h2 text-center" {...heading} />

	<Form name="contact" class="grid gap-2">
		<label>
			<input class="input" name="name" type="text" autocomplete="name" placeholder={$t({ en: 'Name', ja: '名前' })} required>
		</label>

		<label>
			<input class="input" name="email" type="email" autocomplete="email" placeholder={$t({ en: 'Email', ja: 'メールアドレス' })} required>
		</label>

		<label>
			<textarea class="input" name="message" placeholder={$t({ en: 'Message', ja: 'メッセージ' })} required />
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
	import HTag from '../HTag.svelte'
	import Form from './NetlifyForm.svelte'

	export let heading
</script>
