<select on:change={onChange} disabled={loading}>
	{#each locales as {value, title}}
		<option {value} selected={lang === value}>
			{title}
		</option>
	{/each}
</select>

<script>
	import { locales, default_locale } from '~/utils/locales'
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation'
	import { page } from '$app/stores'

	$: lang = $page.params.lang || default_locale.value

	let loading = false

	beforeNavigate(() => loading = true)
	afterNavigate(() => loading = false)

	function onChange({ target }) {
		goto(`/${ target.value }/${ $page.params.slug || '' }`)
	}
</script>
